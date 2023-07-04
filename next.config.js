/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COSMIC_BUCKET_SLUG: process.env.COSMIC_BUCKET_SLUG,
    COSMIC_READ_KEY: process.env.COSMIC_READ_KEY,
  },
};

module.exports = nextConfig;
