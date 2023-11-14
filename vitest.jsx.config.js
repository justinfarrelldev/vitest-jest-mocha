import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['**/*.vitest.test.jsx'],
    reporters: ['default', 'junit'],
    outputFile: `reports/jsx-vitest-${(new Date()).getTime()}.xml`,
  },
});
