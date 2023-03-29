import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#354599 ",
          "link-color": "#354599",
          "border-radius-base": "10px",
          "table-row-hover-bg": "#778899",
        },
        javascriptEnabled: true,
      },
    },
  },
})
