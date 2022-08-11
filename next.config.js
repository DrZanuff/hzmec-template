/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/rewrite",
        destination: "/",
      },
    ]
  },
}
