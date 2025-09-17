import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import tsconfigPaths from "vite-tsconfig-paths";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tsconfigPaths()],
  },
  integrations: [react()],
});
