import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        academics: resolve(__dirname, 'academics.html'),
        admissions: resolve(__dirname, 'admissions.html'),
        alumni: resolve(__dirname, 'alumni.html'),
        campus: resolve(__dirname, 'campus.html'),
        'campus-life': resolve(__dirname, 'campus-life.html'),
        contact: resolve(__dirname, 'contact.html'),
        'spiritual-life': resolve(__dirname, 'spiritual-life.html'),
      },
    },
  },
});
