/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better error handling
  output: 'standalone',
  
  // Enable trailing slashes to avoid 404s with or without trailing slashes
  trailingSlash: true,
  
  // Handle redirects and rewrites
  async redirects() {
    return [
      // Redirect /admin to /admin/ to avoid 404 errors
      {
        source: '/admin',
        destination: '/admin/',
        permanent: true,
      },
    ];
  },
  
  // Ensure all images are properly handled
  images: {
    domains: ['braseltontech-backend-1.onrender.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'braseltontech-backend-1.onrender.com',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig; 