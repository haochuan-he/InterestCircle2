/*
 * @Author: HHC
 * @Date: 2024-08-07 14:15:47
 * @LastEditTime: 2024-08-08 11:18:15
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
})
