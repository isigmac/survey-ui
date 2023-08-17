import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/survey-ui/",
  plugins: [react()],
  server: {
    proxy: {
      "/foo": "http://localhost:3001/foo",
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "api"),
      },
    },
  },
});
