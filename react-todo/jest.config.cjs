module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // Tells Jest to use babel-jest for transforming JS and JSX files
  },
  testEnvironment: 'jest-environment-jsdom',  // Set the test environment to jsdom
  transformIgnorePatterns: [
    '/node_modules/(?!@babel/preset-react)/',  // Ensures that files in some node_modules are properly transformed
  ],
};
