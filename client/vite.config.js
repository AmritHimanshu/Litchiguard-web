import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/AmritHimanshu/Litchiguard-web', // 👈 REPLACE THIS with your actual GitHub repository name (keep the slashes!)
})
