module.exports = {
  setupFiles: ['./jest.setup.js'],
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/test/**/*.test.(ts|tsx)", 
    "**/test/**/*.test.(js|jsx)"
  ],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
  