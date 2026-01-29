/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    },
};

module.exports = nextConfig;
