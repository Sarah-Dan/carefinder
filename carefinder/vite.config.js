import { defineConfig } from 'vite'
// import webpack from 'webpack'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


