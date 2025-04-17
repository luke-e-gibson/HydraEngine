import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@helpers': '/src/HydraEngine/helpers',
    }
  }
})
