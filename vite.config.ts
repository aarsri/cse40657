import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cse40657/',
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, '/src/components'),
      "@img": path.resolve(__dirname, '/src/assets/img'),
      "@svg": path.resolve(__dirname, '/src/assets/svg'),
      "@design": path.resolve(__dirname, '/src/design/css'),
      "@json": path.resolve(__dirname, '/src/env/json')
    }
  }
});
