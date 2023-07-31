module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/__test__/"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
      "^@domain(.*)$": "<rootDir>/src/domain/$1",
      "^@resolvers(.*)$": "<rootDir>/src/resolvers/$1",
      "^@schemas(.*)$": "<rootDir>/src/schemas/$1",
      "^@service(.*)$": "<rootDir>/src/service/$1",
    },
    collectCoverageFrom: ["src/**/*.ts", "!**/src/service/**"],
    setupFilesAfterEnv: ["<rootDir>/__test__/setupEnv.ts"],
  };
  