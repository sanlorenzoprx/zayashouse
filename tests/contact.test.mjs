import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import worker from '../worker.mjs';

const payload = { name: 'Website visitor', email: 'visitor@example.com', subject: 'Partnership', message: 'Tell me about StoryFactory.', website: '', requestId: 'a63de750-1234-4234-8234-123456789abc' };
const env = {
  RESEND_API_KEY: 'test-key', CONTACT_FROM_EMAIL: 'Website <hello@zayashouse.com>',
  CONTACT_RATE_LIMITER: { limit: async () => ({ success: true }) },
  ASSETS: { fetch: async () => new Response('static page') }
};
const request = (data = payload, headers = {}) => new Request('https://zayashouse.com/api/contact', {
  method: 'POST', headers: { Origin: 'https://zayashouse.com', 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(data)
});

test('static and API routes remain distinct', async () => {
  assert.equal(await (await worker.fetch(new Request('https://zayashouse.com/contact'), env)).text(), 'static page');
  assert.equal((await worker.fetch(new Request('https://zayashouse.com/api/unknown'), env)).status, 404);
  assert.equal((await worker.fetch(new Request('https://zayashouse.com/api/contact', { method: 'DELETE' }), env)).status, 405);
});
test('availability requires sender credentials and rate limiter', async () => {
  for (const missing of ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_RATE_LIMITER']) {
    const config = { ...env, [missing]: undefined };
    assert.deepEqual(await (await worker.fetch(new Request('https://zayashouse.com/api/contact'), config)).json(), { available: false });
    assert.equal((await worker.fetch(request(), config)).status, 503);
  }
});
test('cross-origin requests, malformed JSON and oversized bodies are rejected', async () => {
  assert.equal((await worker.fetch(request(payload, { Origin: 'https://untrusted.example' }), env)).status, 403);
  assert.equal((await worker.fetch(request(payload, { 'Content-Type': 'text/plain' }), env)).status, 415);
  const malformed = request();
  assert.equal((await worker.fetch(new Request(malformed, { body: '{' }), env)).status, 400);
  assert.equal((await worker.fetch(request({ ...payload, message: 'a'.repeat(25000) }), env)).status, 413);
});
test('invalid fields, injection, honeypot and missing retry IDs never send', async () => {
  for (const patch of [{ name: '' }, { email: 'bad' }, { subject: 'Hi\r\nBcc: attacker@example.com' }, { website: 'spam' }, { requestId: '' }, { message: 'x'.repeat(5001) }]) {
    assert.equal((await worker.fetch(request({ ...payload, ...patch }), env)).status, 400);
  }
  assert.equal((await worker.fetch(request(null), env)).status, 400);
});
test('rate limited visitors do not reach the email provider', async () => {
  const response = await worker.fetch(request(), { ...env, CONTACT_RATE_LIMITER: { limit: async () => ({ success: false }) } });
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '60');
});
test('send uses fixed destination, authenticated sender, reply-to and stable retry keys', async () => {
  const original = globalThis.fetch;
  const sends = [];
  globalThis.fetch = async (url, options) => {
    sends.push({ url, options, body: JSON.parse(options.body) });
    return Response.json({ id: 'provider-receipt' });
  };
  try {
    for (let i = 0; i < 2; i++) assert.equal((await worker.fetch(request({ ...payload, to: 'attacker@example.com' }), env)).status, 200);
    assert.deepEqual(sends[0].body.to, ['hello@zayashouse.com']);
    assert.equal(sends[0].body.from, env.CONTACT_FROM_EMAIL);
    assert.equal(sends[0].body.reply_to, payload.email);
    assert.equal(sends[0].options.headers['Idempotency-Key'], sends[1].options.headers['Idempotency-Key']);
    await worker.fetch(request({ ...payload, message: 'A different message' }), env);
    assert.notEqual(sends[0].options.headers['Idempotency-Key'], sends[2].options.headers['Idempotency-Key']);
  } finally { globalThis.fetch = original; }
});
test('provider rejection, missing receipt and timeout never report success', async () => {
  const original = globalThis.fetch;
  try {
    for (const mock of [async () => Response.json({ error: 'unavailable' }, { status: 503 }), async () => Response.json({}), async () => { throw new Error('timeout'); }]) {
      globalThis.fetch = mock;
      const response = await worker.fetch(request(), env);
      assert.equal(response.status, 502);
      assert.equal((await response.json()).ok, undefined);
    }
  } finally { globalThis.fetch = original; }
});
test('contact route has labels, email and the requested form controls', () => {
  // Render the actual route template without running browser initialization.
  const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  const template = vm.runInNewContext(source.slice(0, source.indexOf('function normalizePath')) + '\npages["/contact"]()');
  for (const name of ['name', 'email', 'subject', 'message']) assert.match(template, new RegExp(`name="${name}"`));
  assert.match(template, /hello@zayashouse.com/);
  assert.match(template, /Copy email/);
  assert.match(template, /aria-live="polite"/);
  assert.doesNotMatch(source, /Â·|â€”|â†’/);
});
