import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages static export configuration
  output: 'export',
  // Base path for GitHub Pages deployment
  basePath: '/DemoSciMSPT',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
