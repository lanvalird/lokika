import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import webExtension from 'vite-plugin-web-extension';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), webExtension()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
