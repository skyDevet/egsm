import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig(({ mode }) => {
  // Check if we're deploying to GitHub Pages
  const isGitHubPages = mode === 'github-pages' || process.env.GITHUB_PAGES === 'true'
  const baseUrl = isGitHubPages ? '/egsm/' : '/'
  
  return {
    base: baseUrl,
    plugins: [preact()],
    server: { host: true, port: 3000 },
    build: { outDir: 'dist', sourcemap: false }
  }
})