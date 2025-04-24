import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'src/specs',
  timeout: 35_000,
  retries: 1,
  reporter: [
    ['list'],
    ['html',  { outputFolder: 'reports/html', open: 'never' }],
    ['json',  { outputFile:  'reports/report.json' }]
  ],
  use: {
    baseURL: 'https://parabank.parasoft.com/parabank',
    viewport: { width: 1280, height: 800 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false,
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});
