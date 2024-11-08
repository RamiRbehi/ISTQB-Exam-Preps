import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/ISTQB-Exam-Preps.git",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})