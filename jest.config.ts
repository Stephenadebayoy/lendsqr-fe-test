/** @format */

export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json",
    },
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "<rootDir>/jest/styleMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
