import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/Todo/",
  server:{
    host:'0.0.0.0'
  }
})
