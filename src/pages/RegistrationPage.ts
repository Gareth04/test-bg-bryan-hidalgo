import { Page, expect } from '@playwright/test';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
}

export class RegistrationPage {
  constructor(private readonly page: Page) {}

  async fillForm(data: RegistrationData): Promise<void> {
    await this.page.locator('#customer\\.firstName').fill(data.firstName);
    await this.page.locator('#customer\\.lastName').fill(data.lastName);
    await this.page.locator('#customer\\.address\\.street').fill(data.address);
    await this.page.locator('#customer\\.address\\.city').fill(data.city);
    await this.page.locator('#customer\\.address\\.state').fill(data.state);
    await this.page.locator('#customer\\.address\\.zipCode').fill(data.zip);
    await this.page.locator('#customer\\.phoneNumber').fill(data.phone);
    await this.page.locator('#customer\\.ssn').fill(data.ssn);
    await this.page.locator('#customer\\.username').fill(data.username);
    await this.page.locator('#customer\\.password').fill(data.password);
    await this.page.locator('#repeatedPassword').fill(data.password);
  }

  async submit(): Promise<void> {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async expectSuccess(): Promise<void> {
    await expect(this.page.getByText('Your account was created successfully'))
      .toBeVisible({ timeout: 10_000 });
  }
}
