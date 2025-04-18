import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hydra', 
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@helpers': '/src/HydraEngine/helpers',
    }
  }
})
