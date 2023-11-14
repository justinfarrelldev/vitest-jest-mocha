import { defineConfig } from 'vitest/config';

// This is the same config as the JS one, just pointing to a different folder.
// Vitest automatically supports Typescript.

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.vitest.test.ts']
  },
});
