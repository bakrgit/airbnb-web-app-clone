// Next-intl
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();
const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withNextIntl(nextConfig);
