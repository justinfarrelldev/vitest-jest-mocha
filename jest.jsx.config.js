export default {
    testMatch: ['<rootDir>/src/jsx/jest/*.jest.test.jsx'],
    testEnvironment: "jsdom",
    reporters: [
        "default", ["jest-junit", { outputDirectory: 'reports', uniqueOutputName: "true", outputName: "jsx-jest" }]
    ]
};