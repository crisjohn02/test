import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
            buildDirectory: 'ide-build'
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: 'ide-build/',
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
