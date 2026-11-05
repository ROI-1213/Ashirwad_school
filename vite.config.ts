import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

function htmlDevTransform(): Plugin {
  return {
    name: "html-dev-transform",
    transformIndexHtml(html, ctx) {
      if (ctx.server) {
        return html
          .replace(
            /<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>/,
            '<script type="module" src="/src/main.tsx"></script>'
          )
          .replace(
            /<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]+\.css">/,
            ""
          );
      }
      return html;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8135,
  },
  plugins: [
    htmlDevTransform(),
    react(),
    mode === "development" && process.env.NODE_ENV !== "production" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
