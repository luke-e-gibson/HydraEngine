import { defineConfig } from 'vite';

export default defineConfig({
  base: '/HydraEngine', 
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@helpers': '/src/HydraEngine/helpers',
    }
  }
})
