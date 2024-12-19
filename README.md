# Automation Testing with Playwright

This repository contains a collection of automation testing projects using [Playwright](https://playwright.dev/). It includes examples of various frameworks, configurations, and CI/CD integrations for building reliable and scalable test suites.

---

## Branches Overview

- **main**: Contains the base setup and sample tests using Playwright , Includes basic CI/CD setup using [Jenkins](https://www.jenkins.io/).
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

- **Run all tests**:

  ```bash
  npx playwright test
  ```

- **Generate an HTML report**:

  ```bash
  npx playwright test --reporter=html
  ```

- **Run tests in a specific browser** (e.g., Chromium):

  ```bash
  npx playwright test --project=chromium
  ```

- **Run tests in headed mode**:

  ```bash
  npx playwright test --headed
  ```

---

## Test Report

After running tests with the `--reporter=html` option, open the generated report:

```bash
playwright-report/index.html
```

---

## CI/CD with Jenkins

The `jenkins` branch contains basic configurations for setting up CI/CD pipelines using Jenkins. Ensure Jenkins is installed and properly configured to integrate with this project.

---

## References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [CodeceptJS with Playwright](https://codecept.io/playwright/)
- [Cucumber Documentation](https://cucumber.io/docs/guides/10-minute-tutorial/)
- [Mocha Documentation](https://mochajs.org/#getting-started)
- [Jenkins Setup Guide](https://www.jenkins.io/doc/book/installing/)