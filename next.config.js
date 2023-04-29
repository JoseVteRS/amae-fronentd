/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['images.pexels.com', 'images.unsplash.com', 'localhost'],
    remotePatterns:[
      {
        protocol: "https",
        hostname: 'images.pexels.com',
        // opcionales pero con mayor seguridad
        port: "",
        pathname: '/photos/**'
      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
        // opcionales pero con mayor seguridad
        port: "",
        pathname: '/img/**'
      },
      {
        protocol: "http",
        hostname: 'localhost',
        // opcionales pero con mayor seguridad
        port: "1337",
        pathname: '/uploads/**'
      }
    ]
  },
}

module.exports = nextConfig
