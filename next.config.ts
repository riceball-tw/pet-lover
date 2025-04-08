import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dog.ceo',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
