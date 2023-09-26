import { defineConfig } from 'vite';
import leaf from '@leafphp/vite-plugin';

export default defineConfig({
    plugins: [
        leaf({
            input: ['app/views/js/app.js'],
            refresh: true,
        }),
    ],
});


/* import path from require('path');

export default defineConfig {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
    },
    server: {
        port: 8080
    },
    plugins: [
        leaf({
            input: ['app/views/js/app.js', 'app/views/css/app.css'],
            refresh: true,
        }),
    ],
} */