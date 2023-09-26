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
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.php'),
          },
        },
      },
});