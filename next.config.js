/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  env:{
    API_URL: "http://localhost:4000",
    HOST: "http://localhost:3000"
  }
}

module.exports = nextConfig
