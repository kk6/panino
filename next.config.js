/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs")

const moduleExports = {
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

const SentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)
