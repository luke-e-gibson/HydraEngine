import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/HydraEngine' : undefined,
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@helpers': '/src/HydraEngine/helpers',
    }
  }
}));
