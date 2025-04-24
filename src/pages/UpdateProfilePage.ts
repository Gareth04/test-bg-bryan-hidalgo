import { Page, expect } from '@playwright/test';

export interface ProfileData {
  firstName: string;
  lastName:  string;
  address:   string;
}

export class UpdateProfilePage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.getByRole('link', { name: 'Update Contact Info' }).click();
  }

  async update(data: ProfileData): Promise<void> {
    await this.page.locator('#customer\\.firstName').fill(data.firstName);
    await this.page.locator('#customer\\.lastName').fill(data.lastName);
    await this.page.locator('#customer\\.address\\.street').fill(data.address);
    await this.page.getByRole('button', { name: 'Update Profile' }).click();
  }

  async expectSuccess(): Promise<void> {
    await expect(
      this.page.getByText('Your updated address and phone number have been added to the system')
    ).toBeVisible({ timeout: 10_000 });
  }
}
