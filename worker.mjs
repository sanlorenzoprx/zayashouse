const sender = 'hello@zayashouse.com';
const allowedOrigins = new Set(['https://zayashouse.com', 'https://www.zayashouse.com']);
const maxBytes = 24000;
const json = (body, status = 200, headers = {}) => Response.json(body, {
  status, headers: { 'Cache-Control': 'no-store', ...headers }
});
const configured = env => Boolean(env.CONTACT_EMAIL && env.CONTACT_TO_EMAIL && env.CONTACT_RATE_LIMITER);

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (!path.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (path !== '/api/contact') return json({ error: 'Not found' }, 404);
    if (request.method === 'GET') return json({ available: configured(env) });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, { Allow: 'GET, POST' });
    if (!allowedOrigins.has(request.headers.get('Origin'))) return json({ error: 'Forbidden' }, 403);
    if (!configured(env)) return json({ error: 'Message sending is unavailable. Please email hello@zayashouse.com.' }, 503);
    if (request.headers.get('Content-Type')?.split(';')[0].trim() !== 'application/json') {
      return json({ error: 'Expected JSON' }, 415);
    }
    // Enforce the body limit even when Content-Length is missing or untrusted.
    let payload;
    try {
      const reader = request.body?.getReader();
      if (!reader) return json({ error: 'Missing message' }, 400);
      const chunks = [];
      let length = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > maxBytes) {
          await reader.cancel();
          return json({ error: 'Message is too large' }, 413);
        }
        chunks.push(value);
      }
      const body = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
      payload = JSON.parse(new TextDecoder().decode(body));
    } catch { return json({ error: 'Invalid JSON' }, 400); }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return json({ error: 'Invalid message' }, 400);
    const fields = ['name', 'email', 'subject', 'message', 'requestId', 'website'];
    if (fields.some(field => typeof payload[field] !== 'string')) return json({ error: 'Missing fields' }, 400);
    const { name, email, subject, message, requestId, website } = Object.fromEntries(fields.map(field => [field, payload[field].trim()]));
    if (website) return json({ error: 'Invalid message' }, 400);
    if (!name || name.length > 100 || !subject || subject.length > 150 || !message || message.length > 5000 ||
        email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
        /[\r\n\x00-\x1f]/.test(name + email + subject) ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId)) {
      return json({ error: 'Check your name, email, subject, and message' }, 400);
    }
    try {
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const limit = await env.CONTACT_RATE_LIMITER.limit({ key: `zayashouse-contact:${ip}` });
      if (!limit.success) return json({ error: 'Too many attempts. Please try again later.' }, 429, { 'Retry-After': '60' });
      // The recipient is the verified destination already used by hello@ routing.
      // Keep it server-side; visitors cannot choose the sender or destination.
      const result = await env.CONTACT_EMAIL.send({
        from: { email: sender, name: 'Zayas House Website' },
        to: env.CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `Website inquiry: ${subject}`,
        text: `Website contact inquiry\n\nReference: ${requestId}\nName: ${name}\nEmail: ${email}\n\n${message}`
      });
      if (typeof result?.messageId !== 'string' || !result.messageId) return json({ error: 'Message could not be confirmed. Please email us.' }, 502);
      return json({ ok: true });
    } catch {
      // Do not log contact content, personal details, or provider credentials.
      return json({ error: 'Message could not be confirmed. Please retry or email us.' }, 502);
    }
  }
};
