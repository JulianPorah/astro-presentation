// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    experimental: {
        svg: true,
    },
    output: "server",
    integrations: [vue(), svelte()],
});
