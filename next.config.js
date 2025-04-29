/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'], // Add the external domain to the allowed list
  },
}

module.exports = nextConfig;

