module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    collectCoverageFrom: [
        'app/**/*.{js,jsx}',
        '!app/**/*.test.{js,jsx}',
        '!app/app.js',
    ],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 91,
            functions: 98,
            lines: 98,
        },
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testRegex: 'tests/.*\\.test\\.tsx$',
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};
