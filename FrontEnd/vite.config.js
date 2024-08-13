/*
 * @Author: HHC
 * @Date: 2024-08-07 14:15:47
 * @LastEditTime: 2024-08-13 20:39:31
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),],
  base: './'
})
