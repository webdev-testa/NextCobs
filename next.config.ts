import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/stories",
        destination: "/pursuits/stories",
        permanent: true,
      },
      {
        source: "/travel",
        destination: "/pursuits/travel",
        permanent: true,
      },
      {
        source: "/getting-better-at-things",
        destination: "/pursuits/getting-better-at-things",
        permanent: true,
      },
      {
        source: "/games",
        destination: "/pursuits/games",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
