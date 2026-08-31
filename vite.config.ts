import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'skip-inaccessible-files',
      buildStart() {
        const publicDir = path.resolve(__dirname, 'public');
        const entries = fs.readdirSync(publicDir);
        for (const entry of entries) {
          if (entry.includes(' ')) {
            try {
              fs.accessSync(path.join(publicDir, entry), fs.constants.R_OK);
            } catch {
              console.warn(`Skipping inaccessible file: ${entry}`);
            }
          }
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  build: {
    copyPublicDir: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
