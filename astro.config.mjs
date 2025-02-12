// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://jgranados4.github.io",
  base: "Practica-astro",
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind()],
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
