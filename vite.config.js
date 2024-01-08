import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-bootstrap/react_bootstrap_scss/",
  plugins: [react()],
});
