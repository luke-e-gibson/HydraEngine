import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/HydraEngine' : undefined,
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@triton': '/src/HydraEngine/triton',
      '@hydra': '/src/HydraEngine/engine',
      '@hydra/editor': '/src/HydraEditor',
      '@helpers': '/src/HydraEngine/helpers',
    }
  }
}));
