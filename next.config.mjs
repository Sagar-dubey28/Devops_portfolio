/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enabled for GitHub Pages Static Export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig