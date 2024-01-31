/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/src/tests"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    transform: {
        "^.+\\.tsx?$": ['ts-jest', {
            tsconfig: 'tsconfig.json'
        }],
    },
    testMatch: ["**/tests/**/*.test.ts"],
};
