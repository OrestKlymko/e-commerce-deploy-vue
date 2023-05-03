import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/',
  server: {
    proxy: {
      '/api': 'https://e-com-website-on-vue-3.herokuapp.com',
    },
  },

})


