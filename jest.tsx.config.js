export default {
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/tsx/jest/*.jest.test.tsx'],
    testEnvironment: "jsdom",
    reporters: [
        "default", ["jest-junit", { outputDirectory: 'reports', uniqueOutputName: "true", outputName: "tsx-jest" }]
    ]
};