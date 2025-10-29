import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Make sure the base matches your repo name!
export default defineConfig({
  plugins: [react()],
  base: '/Skincare_By_Aya/',
})
