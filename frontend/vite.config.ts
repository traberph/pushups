import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
 base: "/",
 plugins: [react(), tailwindcss()],
 preview: {
  port: 3000,
  strictPort: true,
 },
 server: {
  port: 3000,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:3000",
  proxy: {
    "/api": "http://localhost:8000",
    // "/api": "http://backend:8000",
    '/auth-proxy': {
      target: 'https://auth.traberph.de',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/auth-proxy/, ''),
    },
  }
 },
});