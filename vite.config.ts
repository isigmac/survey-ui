import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      port: 5173,
      proxy: {
        "/foo": "http://localhost:3001/foo",
        "/api": {
          target: "http://localhost:3001",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "api"),
        },
      },
    },
  };

  if (command !== "serve") {
    config.base = "/survey-ui/";
  }

  return config;
});
