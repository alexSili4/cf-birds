import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        thanks: resolve(__dirname, './src/thanks/index.html'),
      },
      output: {
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/styles[extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'js/[name][extname]';
          }
          if (assetInfo.name.endsWith('.svg')) {
            return 'icons/[name]-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.ttf') || assetInfo.name.endsWith('.otf')) {
            return 'fonts/[name]-[hash][extname]';
          }
          if (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg')) {
            return 'images/[name]-[hash][extname]';
          }
          // Настройка для других файлов, если необходимо
          return 'assets/[name]-[hash][extname]';
        },
        // Настройка для вывода файлов JavaScript
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: './',
});
