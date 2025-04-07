import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    host: true,
  },
  plugins: [
    react(),
    checker({ typescript: true }), // 🔥 Activa la verificación de TypeScript en Vite
  ],
});

