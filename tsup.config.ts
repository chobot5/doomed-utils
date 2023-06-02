import { defineConfig } from 'tsup'

const env = process.env.NODE_ENV

export default defineConfig({
  splitting: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  watch: env === 'development',
  target: 'es2020',
  outDir: 'dist',
  entry: ['src/**/*.ts', '!src/**/*.test.*', '!src/**/__tests__/*.*'],
})
