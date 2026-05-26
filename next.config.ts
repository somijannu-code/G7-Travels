import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/help-center',
        permanent: true,
      },
      {
        source: '/partner',
        destination: '/partner-with-us',
        permanent: true,
      },
      {
        source: '/refund',
        destination: '/refund-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
