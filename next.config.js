/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
};

module.exports = nextConfig;
