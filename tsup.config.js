import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['index.ts'],
    clean: true,
    splitting: false,
    dts: false,
    sourcemap: false,
    format: ['cjs'],
    outDir: 'action',
  },
])
