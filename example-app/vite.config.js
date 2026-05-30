import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const host = process.env.VITE_HOST ?? '127.0.0.1';
const port = Number(process.env.VITE_PORT ?? 5173);

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        host,
        port,
        hmr: {
            host: process.env.VITE_HMR_HOST ?? host,
            protocol: process.env.VITE_HMR_PROTOCOL ?? 'ws',
        },
    },
});
