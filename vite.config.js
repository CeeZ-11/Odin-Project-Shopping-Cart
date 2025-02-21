import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Critters from "critters";

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
      name: "vite-plugin-critters",
      apply: "build",
      enforce: "post",
      async closeBundle() {
        const { readFile, writeFile } = await import("fs/promises");
        const path = "./dist/index.html";
        try {
          let html = await readFile(path, "utf8");
          const critters = new Critters({
            preload: "swap",
            inlineFonts: true,
            pruneSource: true,
          });
          html = await critters.process(html);
          await writeFile(path, html, "utf8");
          console.log("✅ Critters applied: Critical CSS inlined!");
        } catch (error) {
          console.error("❌ Critters processing failed:", error);
        }
      },
    },
  ],
  build: {
    cssCodeSplit: true,
    outDir: "dist",
  },
  base: "/Odin-Project-Shopping-Cart/",
});
