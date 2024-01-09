import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/users": {
  //       target: "https://my-json-server.typicode.com/Murphy120814/CRUD_router",
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
  plugins: [react()],
});
