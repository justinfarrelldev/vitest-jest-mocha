import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    testMatch: ['<rootDir>/src/js/vitest/*.vitest.test.js'],
    environment: 'node',
    include: ['**/*.vitest.test.js'],
    reporters: ['default', 'junit'],
    outputFile: `reports/js-vitest-${(new Date()).getTime()}.xml`,
  },
});
