/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/library",
        destination: "/library/watching",
        permanent: true,
      },
    ]
  },
}
