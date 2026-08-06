import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A GitHub Pages project site is served from a subfolder named after the repo
// (…github.io/NAVAX/, …github.io/NAVAX-WORK/, and so on). Using a relative base
// means the asset URLs resolve against whatever folder the page is sitting in,
// so one build works in any repo without a config change per fork.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
