import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  /* config options here */
  images:{
    domains: ['images.dog.ceo','unsplash.com'],
  }
};

export default nextConfig;
