/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['dl.airtable.com'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/rewrite',
        destination: '/',
      },
    ]
  },
}
