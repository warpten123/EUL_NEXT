import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, // set to true if you want a 308 redirect
      },
    ];
  },
  reactStrictMode: false,
  /* config options here */
};

export default nextConfig;
