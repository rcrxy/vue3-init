import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command, ssrBuild }) => {
   const env = loadEnv(mode, process.cwd());

   return {
      plugins: [
         vue(),
         svgLoader(),
         AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: "./src/@types/auto/auto-imports.d.ts",
         }),
         Components({
            resolvers: [ElementPlusResolver()],
            dts: "./src/@types/auto/components.d.ts",
         }),
      ],
      server: {
         hmr: true,
         host: true,
         port: 8000,
         strictPort: true,
         open: "index.html",
         proxy: {
            "/api": {
               target: env.VITE_BASEURL,
               changeOrigin: true,
               rewrite: path => path.replace(/^\/api/, ""),
            },
         },
      },
      base: env.VITE_PUBLIC_BASE,
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "./src"),
            "@img": path.resolve(__dirname, "./src/assets/images"),
            "@views": path.resolve(__dirname, "./src/views"),
            "@service": path.resolve(__dirname, "./src/service"),
         },
      },
   };
});
