/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  setupFiles: ["dotenv/config"],
  testMatch: ["**/**/*.test.ts"],
  verbose: true,
  forceExit: false,
};
