import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      context: path.resolve(__dirname, 'src/context'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  }
})
