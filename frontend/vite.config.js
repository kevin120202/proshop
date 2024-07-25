import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});

// export default defineConfig({
//     plugins: [react()],
//     server: {
//         // proxy requests prefixed '/api' and '/uploads'
//         proxy: {
//             '/api': 'http://localhost:8000/api',
//             '/uploads': 'http://localhost:8000',
//         },
//     },
// });