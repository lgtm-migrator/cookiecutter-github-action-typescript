/* eslint-disable import/no-commonjs */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  verbose: true,
  // as per https://github.com/codecov/example-typescript/blob/main/package.json:
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
};
