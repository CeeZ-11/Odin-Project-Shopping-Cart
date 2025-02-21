import { defineConfig } from "vite";
import Critters from "critters-webpack-plugin";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react(),
    {
      name: "configure-critters",
      apply: "build",
      configResolved(config) {
        if (config.build.rollupOptions.output) {
          config.build.rollupOptions.output.plugins = [
            new Critters({
              preload: "swap",
              inlineFonts: true,
              pruneSource: true,
            }),
          ];
        }
      },
    },
  ],
  base: "/Odin-Project-Shopping-Cart/",
});
