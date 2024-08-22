import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';



export default defineConfig({
  
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~sass/main.scss"; @import "~sass/abstracts/_index.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~sass': path.resolve(__dirname, 'src/assets/sass'),
    }
  }
});
