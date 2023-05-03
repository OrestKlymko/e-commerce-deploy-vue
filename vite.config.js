import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'https://e-commerce-deploy-vue.vercel.app',
  server: {
    proxy: {
      '/api': 'https://e-com-website-on-vue-3.herokuapp.com',
    },
  },

})


