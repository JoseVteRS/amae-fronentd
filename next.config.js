/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'localhost', 'amae-backend-production.up.railway.app'],
    remotePatterns:[
      {
        protocol: "https",
        hostname: 'images.pexels.com',
        port: "",
        pathname: '/photos/**'
      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com',
        port: "",
        pathname: '/img/**'
      },
      {
        protocol: "http",
        hostname: 'localhost',
        port: "1337",
        pathname: '/uploads/**'
      },
      // {
      //   protocol: "https",
      //   hostname: 'amae-backend-production.up.railway.app',
      //   port: "80",
      //   pathname: '/uploads/**'
      // }

      
    ]
  },
}

module.exports = nextConfig
