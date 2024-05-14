const scanner = require("sonarqube-scanner")

scanner(
  {
    serverUrl: "http://100.26.186.251:9000",
    token:"squ_826a2e5e73731cc0de3cdbd970bc16eaed7167ef",
    options: {
      "sonar.projectName": "github-action-project",
      "sonar.projectDescription": "github-action-project",
      "sonar.sources": "src",
      "sonar.tests": "test",
      "sonar.javascript.coveragePlugin": "lcov",
      "sonar.javascript.lcov.reportPaths": "output/coverage/jest/lcov.info",
    },
  },
  () => process.exit(),
)
