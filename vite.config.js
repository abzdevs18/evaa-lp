import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  // SPA fallback: redirect all paths to index.html
  appType: 'spa',
});
