/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8089',
        pathname: '/raw/**',
      },
    ],
  },
};

module.exports = nextConfig;
