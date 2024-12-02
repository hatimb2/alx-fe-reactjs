module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",

  rootDir: './',

  clearMocks: true,

  setupFilesAfterEnv: [
    '@testing-library/jest-dom', // This will add jest-dom matchers globally
  ],

  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(@testing-library|react-testing-library)/)",
  ],

  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
