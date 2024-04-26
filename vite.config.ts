import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), nodePolyfills()], // `nodePollyfills()` usado para carregar os packages padrão do node (crypto)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
