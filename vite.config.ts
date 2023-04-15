import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = command === 'build' ? '/element' : './'
  return {
    base,
    build: {
      outDir: 'element'
    },
    plugins: [
      vue(),
    ],
  }
})
