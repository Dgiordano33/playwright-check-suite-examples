import { defineConfig } from 'checkly'

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
    checkMatch: '**/__checks__/*.check.ts',
    // Playwright tests will be loaded from __checks__/playwright.check.ts
    
  },
  cli: {
    runLocation: 'us-east-1',
  },
})
