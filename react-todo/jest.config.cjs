module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  rootDir: './',
  clearMocks: true,
  setupFilesAfterEnv: [
    'jest-environment-jsdom',              // Ensure jsdom is properly set
    '@testing-library/jest-dom/extend-expect',  // Reference jest-dom correctly
    '<rootDir>/src/setupTests.js',          // Your setup file, if required
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
