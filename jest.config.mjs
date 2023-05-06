/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  transformIgnorePatterns: [
    'node_modules/chalk',
  ],
};
