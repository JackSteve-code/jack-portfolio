/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Enables static HTML export (required for GitHub Pages)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Dynamic for local vs deploy
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',  // Same for assets
  images: {
    unoptimized: true,       // GitHub Pages doesn't support Next Image optimization
  },
};

export default nextConfig;
