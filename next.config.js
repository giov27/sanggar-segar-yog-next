/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['react-bootstrap'],
  },
};

module.exports = nextConfig;
