import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = ''
  base = command === 'build' ? '/dist' : './'
  console.log(base, command)
  return {
    base: base,
    plugins: [
      vue(),
      rollupPluginNodeResolve({
        extensions: ['.js', '.ts', 'tsx', '.vue']
      })
    ],
  }
})
