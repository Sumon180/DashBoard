import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      // {
      //   find: "@css",
      //   replacement: path.resolve(__dirname, "./src/assets/css")
      // },
      {
        find: "@route",
        replacement: path.resolve(__dirname, "./src/routes")
      },
      {
        find: "@page",
        replacement: path.resolve(__dirname, "./src/pages")
      },
      // {
      //   find: "@pageComponent",
      //   replacement: path.resolve(__dirname, "./src/pageComponents")
      // },
      {
        find: "@config",
        replacement: path.resolve(__dirname, "./src/configs")
      },
      {
        find: "@asset",
        replacement: path.resolve(__dirname, "./src/assets")
      },
      {
         find: "@css",
         replacement: path.resolve(__dirname, "./src/assets/css")
      },
      {
        find: "@css/*",
        replacement: path.resolve(__dirname, "./src/assets/css/*")
      },
      // {
      //   find: "@font",
      //   replacement: path.resolve(__dirname, "./src/assets/fonts")
      // },
      // {
      //   find: "@image",
      //   replacement: path.resolve(__dirname, "./src/assets/images")
      // },
      // {
      //   find: "@component",
      //   replacement: path.resolve(__dirname, "./src/components")
      // },
      // {
      //   find: "@lang",
      //   replacement: path.resolve(__dirname, "./src/langs")
      // },
      // {
      //   find: "@store",
      //   replacement: path.resolve(__dirname, "./src/store")
      // }
    ]
  }
})
