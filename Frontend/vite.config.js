import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'

const require = createRequire(import.meta.url)
const monacoEditorApi = resolve(
  dirname(require.resolve('monaco-editor')),
  '..',
  '..',
  'esm/vs/editor/editor.api.js',
)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: /^monaco-editor\/esm\/vs\/editor\/editor\.api\.js$/,
        replacement: monacoEditorApi,
      },
    ],
  },
})
