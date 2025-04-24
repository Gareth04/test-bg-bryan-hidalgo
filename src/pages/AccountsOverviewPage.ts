import { Page, expect } from '@playwright/test';

export class AccountsOverviewPage {
  constructor(private readonly page: Page) {}

  async expectLoggedIn(): Promise<void> {
    await expect(this.page.getByText('Accounts Overview')).toBeVisible();
  }
}
