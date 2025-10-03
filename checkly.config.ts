import { defineConfig } from 'checkly'
import { PlaywrightCheck } from 'checkly/constructs'



  // Playwright Check Suite configuration
  new PlaywrightCheck('checkly-test-project-playwright-suite', {
    name: 'checkly-test-project - Playwright Test Suite',
    playwrightConfigPath: './playwright.config.ts',
    
    locations: ["us-east-1","eu-west-1"],
    frequency: 5,
    tags: ['playwright', 'auto-generated'],
  })
  

export default defineConfig({
  projectName: 'checkly-test-project',
  logicalId: 'checkly-test-project',
  repoUrl: process.env.GITHUB_REPOSITORY_URL,
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2024.02',
    frequency: 5,
    locations: ["us-east-1","eu-west-1"],
    tags: ['auto-generated'],
    // Playwright tests detected - using PlaywrightCheck construct above
    
  },
  cli: {
    runLocation: 'us-east-1',
  },
})
