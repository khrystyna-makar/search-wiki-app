import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    coverage: {
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['**/*.stories.js', 'src/main.jsx'],
      thresholds: {
        branches: 80,
        lines: 80,
        functions: 80,
        statements: 80
      },
      reporter: ['text', 'html']
    },
  },
})
