import type { NextConfig } from 'next'
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
    webpack(config: Configuration) {
        config.resolve = {
            ...(config.resolve || {}),
            alias: {
                ...(config.resolve?.alias || {}),
                konva: 'konva',
            },
        }
        return config
    },
}

export default nextConfig;

