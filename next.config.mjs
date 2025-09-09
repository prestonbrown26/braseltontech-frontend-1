/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better error handling
  output: 'standalone',
  
  // Enable trailing slashes to avoid 404s with or without trailing slashes
  trailingSlash: true,
  
  // Handle redirects and rewrites
  async redirects() {
    return [
      // Redirect /admin to Django admin on backend
      {
        source: '/admin',
        destination: 'https://braseltontech-backend-1.onrender.com/admin/',
        permanent: false, // Use 302 redirect to allow for future changes
      },
      {
        source: '/admin/',
        destination: 'https://braseltontech-backend-1.onrender.com/admin/',
        permanent: false, // Use 302 redirect to allow for future changes
      },
    ];
  },
  
  // Add API rewrites if frontend and backend are on different domains
  async rewrites() {
    // Check if we need to proxy API requests (different domains)
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    // If backend URL is explicitly set and different from frontend, proxy API requests
    if (backendUrl && backendUrl !== '') {
      console.log(`Setting up API proxy to: ${backendUrl}/api`);
      return [
        {
          source: '/api/:path*',
          destination: `${backendUrl}/api/:path*`,
        },
      ];
    }
    
    // Otherwise, no proxy needed (same domain)
    return [];
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