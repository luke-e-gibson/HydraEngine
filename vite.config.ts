import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@math': '/src/HydraEngine/helpers/math.ts',
    }
  }
})

