import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    testMatch: ['<rootDir>/src/js/vitest/*.vitest.test.js'],
    environment: 'node',
    exclude: [...configDefaults.exclude, "src/js/jest/**/*", "src/js/mocha/**/*"],
  },
});
