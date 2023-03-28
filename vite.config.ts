import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  let base = ''
  base = command === 'build'? '/dist' : ''
  console.log(base, command)
  return {
    base: base,
    plugins: [vue()],
  }
})
