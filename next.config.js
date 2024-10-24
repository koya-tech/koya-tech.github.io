const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    i18n: {
        locales: ['en', 'jp'],
        defaultLocale: 'en',
    },
}

module.exports = withNextIntl(nextConfig);
