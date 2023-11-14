export default {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/js/jest/*.jest.test.js'],
  reporters: [
    "default", ["jest-junit", { outputDirectory: 'reports', uniqueOutputName: "true", outputName: "js-jest" }]
  ]
};