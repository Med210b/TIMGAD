import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const githubPagesFallback = () => ({
  name: 'github-pages-fallback',
  closeBundle() {
    fs.copyFileSync(
      path.resolve(__dirname, 'dist/index.html'),
      path.resolve(__dirname, 'dist/404.html')
    );
  },
});

export default defineConfig(() => {
  return {
    // The production site is served from the custom domain root.
    base: '/',

    plugins: [react(), tailwindcss(), githubPagesFallback()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',

      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});