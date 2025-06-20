/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**', // This matches any path on the hostname
      },
      // If you add other external image domains later, add them here too.
      // Example: { protocol: 'https', hostname: 'example.com', pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;