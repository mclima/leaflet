// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  
  server: {
    port: 3000,
    open: true
  },
  
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules']
      }
    }
  }
});