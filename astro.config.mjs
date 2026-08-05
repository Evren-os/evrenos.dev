import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://evrenos-dev.pages.dev",
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
