import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  server: {
    port: 5173,
    host: true
  },
  plugins: [
    {
      name: 'dev-rewrite-index',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/template.html';
          }
          next();
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'template.html')
    }
  }
});
