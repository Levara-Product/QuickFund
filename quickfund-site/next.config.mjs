/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Legacy/variant slugs per seo-head-snippets.md. Next.js issues 308
    // (modern permanent redirect, treated identically to 301 by Google/Bing).
    // /guide/f&b is handled in middleware.js (literal "&" does not match here).
    return [
      { source: "/guide/doctors-dentists", destination: "/guide/doctors-and-dentists", permanent: true },
    ];
  },
};
export default nextConfig;
