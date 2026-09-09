import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { zaCitace } from './src/seo/zaCitace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), zaCitace()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    copyPublicDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
