import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $components: resolve("./src/components"),
            //    $stores: resolve('./src/stores'),
            //    $actions: resolve('./src/actions')
        },
    },
    optimizeDeps: {
        include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
    },
});
