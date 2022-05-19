import { defineConfig } from "vite"
import mkcert from "vite-plugin-mkcert"
import { VitePWA } from "vite-plugin-pwa"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({ //   includeAssets: [
    //     "favicon.svg",
    //     "favicon.ico",
    //     "robots.txt",
    //     "apple-touch-icon.png",
    //   ],
    //   manifest: {
    //     name: "내땅너땅",
    //     short_name: "땅땅",
    //     description: "위치기반 소셜 게임",
    //     theme_color: "#ffffff",
    //     icons: [
    //       {
    //         src: "pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any maskable",
    //       },
    //     ],
    //   },
    // }),

    // mkcert(),
  ],
  server: {
    cors: true,
    server: { https: true },
    port: 3005,
    proxy: {
      "/api": {
        target: " http://localhost:3000", // back-end server IP address 뒤에 /는 빼야함
        changeOrigin: true,
      },
      // "/": {
      //   target: " http://localhost:3005", // back-end server IP address 뒤에 /는 빼야함
      //   changeOrigin: true,
      // },
    },
  },
})
