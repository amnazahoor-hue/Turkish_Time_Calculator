/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/about-us", destination: "/hakkimizda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/privacy-policy", destination: "/gizlilik-politikasi", permanent: true },
      { source: "/terms-and-conditions", destination: "/kullanim-kosullari", permanent: true },
      { source: "/disclaimer", destination: "/sorumluluk-reddi", permanent: true },
      { source: "/feragatname", destination: "/sorumluluk-reddi", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/branding/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
