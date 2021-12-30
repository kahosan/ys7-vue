import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
    ],
  },
});
