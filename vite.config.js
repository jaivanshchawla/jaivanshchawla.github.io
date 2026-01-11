import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // ✅ base goes here
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-anim': ['framer-motion', 'gsap'],
          'vendor-3d': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-ui': ['@tabler/icons-react', 'lucide-react', 'clsx', 'tailwind-merge']
        }
      }
    }
  }
})
