# Automation Testing with Playwright

This repository contains a collection of automation testing projects using [Playwright](https://playwright.dev/). It includes examples of various frameworks, configurations, and CI/CD integrations for building reliable and scalable test suites.

---

## Branches Overview

- **main**: Contains the base setup and sample tests using Playwright Includes basic CI/CD setup using [Jenkins](https://www.jenkins.io/).
- **codeCeptJs**: Implements [CodeceptJS](https://codecept.io/) with Playwright for writing test scripts.
- **cucumber**: Uses [Cucumber](https://cucumber.io/) with Gherkin syntax to structure test cases.
- **mocha**: Integrates [Mocha](https://mochajs.org/) as the testing framework with Playwright.
- **scraping**: Demonstrates web scraping examples using Playwright.


---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/quocsy2511/Automation-Testing-playwright.git
   cd Automation-Testing-playwright
   ```

2. **Install dependencies**:

   Ensure you have [Node.js](https://nodejs.org/) installed.

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:

   Use the Playwright command to install the required browsers:

   ```bash
   npx playwright install
   ```

---

## Running Tests

Tests can be run using the pre-configured scripts in the `package.json` file. Below are some common commands:

- **Run tests in Chromium**:

  ```bash
  npm run tests:chrome
  ```

- **Run tests in Firefox**:

  ```bash
  npm run tests:firefox
  ```

- **Run tests in WebKit**:

  ```bash
  npm run tests:webkit
  ```

- **Run end-to-end tests**:

  ```bash
  npm run tests:e2e
  ```

- **Run visual regression tests in Chromium**:

  ```bash
  npm run tests:visual:chromium
  ```

  Update snapshots for visual regression:

  ```bash
  npm run tests:visual:chromium:updates
  ```

- **Run API tests**:

  ```bash
  npm run tests:api
  ```

- **Run with a custom reporter**:

  ```bash
  npm run tests:custom:report
  ```

---

## Test Report

After running tests with the `--reporter` option, check the report according to the specified configuration. For example, use the HTML report:

```bash
playwright-report/index.html
```

---

## CI/CD with Jenkins

The `jenkins` branch contains basic configurations for setting up CI/CD pipelines using Jenkins. Start Jenkins locally with:

```bash
npm run jenkins-server
```

Ensure Jenkins is installed and properly configured to integrate with this project.

---

## References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [CodeceptJS with Playwright](https://codecept.io/playwright/)
- [Cucumber Documentation](https://cucumber.io/docs/guides/10-minute-tutorial/)
- [Mocha Documentation](https://mochajs.org/#getting-started)
- [Jenkins Setup Guide](https://www.jenkins.io/doc/book/installing/)
