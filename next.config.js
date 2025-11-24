/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  basePath: '/Lift', // Required for GitHub Pages subdirectory
  assetPrefix: '/Lift', // Required for GitHub Pages assets
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
}

module.exports = nextConfig


