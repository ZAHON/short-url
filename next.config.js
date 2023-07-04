/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: true,
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
