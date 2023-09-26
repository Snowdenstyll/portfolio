import { defineConfig } from 'vite';
import leaf from '@leafphp/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        leaf({
            input: ['app/views/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'public/assets/', // This should match the path you use in your Blade template
    },
});