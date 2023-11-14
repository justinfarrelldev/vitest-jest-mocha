/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/ts/jest/*.jest.test.ts'],
  reporters: [
    "default", ["jest-junit", { outputDirectory: 'reports', uniqueOutputName: "true", outputName: "ts-jest" }]
  ]
};