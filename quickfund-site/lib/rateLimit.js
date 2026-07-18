// 5 requests per IP per day across all three AI endpoints combined.
// In-memory: correct on a single long-lived server (Railway, Render, VPS,
// docker). On serverless (Vercel/Lambda) instances don't share memory, so this
// becomes best-effort per instance -- swap in Upstash Redis / Vercel KV there.
const DEFAULT_LIMIT = 5;
const buckets = new Map();

export function rateLimit(key, limit = DEFAULT_LIMIT) {
  const day = new Date().toISOString().slice(0, 10);
  const b = buckets.get(key);
  if (!b || b.day !== day) {
    buckets.set(key, { day, count: 1 });
    return { allowed: true, remaining: limit - 1 };
  }
  if (b.count >= limit) return { allowed: false, remaining: 0 };
  b.count += 1;
  return { allowed: true, remaining: limit - b.count };
}
