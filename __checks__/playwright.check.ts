import { PlaywrightCheck } from 'checkly/constructs'

// Playwright Test Suite Check
// This check will run all your Playwright tests matching the pattern: **/*.spec.ts
new PlaywrightCheck('checkly-test-project-playwright-suite', {
  name: 'checkly-test-project - Playwright Test Suite',
  activated: true,
  frequency: 5,
  locations: ["us-east-1","eu-west-1"],
  tags: ['playwright', 'auto-generated'],

  // Reference your Playwright configuration file
  playwrightConfigPath: './playwright.config.ts',
})
