import { Page } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async goToRegistration(): Promise<void> {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }
}
