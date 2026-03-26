# automation-with-playwright

This repository contains automated end-to-end (E2E) tests built with **Playwright**, using **JavaScript/TypeScript**.

It is intended for practicing, developing, and validating test automation scenarios based on Playwright, focusing on web application testing and modern automation best practices.

---

## Project Information

- **Author:** Ricardo Norona
- **Language:** JavaScript / TypeScript
- **Framework:** Playwright
- **Test Type:** End-to-End (E2E) Testing

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

---

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:rsnorona/automation-with-playwright.git
   cd automation-with-playwright
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

---

## Project Structure

```
├── pages/              # Page Object Model classes
│   └── home_page.js    # HomePage class with reusable methods
├── tests/              # Test specifications
│   └── demo.spec.ts    # Demo test for "Request a Quote" flow
├── playwright-report/  # HTML test reports (auto-generated)
├── test-results/       # Test artifacts (screenshots, videos)
├── playwright.config.js
├── eslint.config.mjs
└── package.json
```

---

## Available Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm test`             | Run all Playwright tests          |
| `npm run test:ui`      | Run tests with Playwright UI mode |
| `npm run test:report`  | Open the HTML test report         |
| `npm run format`       | Format code with Prettier         |
| `npm run format:check` | Check code formatting             |

---

## Running Tests

Run all tests:

```bash
npm test
```

Run a specific test file:

```bash
npx playwright test tests/demo.spec.ts
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Run tests in UI mode (interactive):

```bash
npm run test:ui
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Test Configuration

The `playwright.config.js` includes:

- **Browser:** Chromium (Desktop Chrome)
- **Viewport:** 1280x720
- **Headless:** Disabled by default for local development
- **Screenshots:** Captured on failure
- **Videos:** Retained on failure
- **Traces:** Collected on first retry
- **Timeouts:** Action (10s), Navigation (30s)

---

## Page Object Model

This project uses the **Page Object Model (POM)** design pattern. Page classes are located in the `pages/` directory and encapsulate:

- Page navigation
- Element locators
- Reusable interaction methods

Example usage:

```javascript
const homePage = new HomePage(page);
await homePage.goto();
await homePage.openRequestQuote();
await homePage.fillQuoteForm({ firstName: "John", ... });
```

---

## License

ISC
