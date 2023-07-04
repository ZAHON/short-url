/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
    outputFileTracingExcludes: {
      '*': [
        './**/node_modules/@swc/core-linux-x64-gnu',
        './**/node_modules/@swc/core-linux-x64-musl',
      ],
    },
  },
};

module.exports = nextConfig;
