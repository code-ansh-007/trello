/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "cloud.appwrite.io"],
  },
};

module.exports = nextConfig;
