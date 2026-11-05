import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // 1. Port numbers for server, preview, and proxy strictly managed via .env
  const port = Number(env.PORT || env.VITE_PORT || 8135);
  const proxyPort = env.PROXY_PORT ? Number(env.PROXY_PORT) : null;
  const proxyTarget = env.PROXY_TARGET || (proxyPort ? `http://localhost:${proxyPort}` : null);

  // 3. Allowed hosts mapped with .env to avoid coding-level / deployment errors
  const rawAllowedHosts = env.ALLOWED_HOSTS || env.VITE_ALLOWED_HOSTS;
  const allowedHosts = rawAllowedHosts
    ? rawAllowedHosts === "true" || rawAllowedHosts === "*"
      ? true
      : rawAllowedHosts.split(",").map((h) => h.trim())
    : true;

  return {
    server: {
      host: "0.0.0.0",
      port: port,
      allowedHosts: allowedHosts,
      ...(proxyTarget
        ? {
            proxy: {
              "/api": {
                target: proxyTarget,
                changeOrigin: true,
                secure: false,
              },
            },
          }
        : {}),
    },
    preview: {
      host: "0.0.0.0",
      port: port,
      allowedHosts: allowedHosts,
      ...(proxyTarget
        ? {
            proxy: {
              "/api": {
                target: proxyTarget,
                changeOrigin: true,
                secure: false,
              },
            },
          }
        : {}),
    },
    plugins: [
      react(),
      mode === "development" && process.env.NODE_ENV !== "production" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "react/jsx-dev-runtime": path.resolve(__dirname, "./src/jsx-runtime-fallback.ts"),
      },
    },
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  };
});
