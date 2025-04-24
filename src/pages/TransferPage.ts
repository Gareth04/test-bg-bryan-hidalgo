import { Page, expect } from '@playwright/test';

export class TransferPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    const link = this.page.locator('a[href="transfer.htm"]');
    await link.waitFor({ state: 'visible', timeout: 15_000 });
    await link.click();
  }

  async transfer(amount: number, from: string, to: string): Promise<void> {
    await this.page.locator('input[name="amount"]').fill(amount.toString());
    await this.page.locator('select[name="fromAccountId"]').selectOption(from);
    await this.page.locator('select[name="toAccountId"]').selectOption(to);
    await this.page.getByRole('button', { name: 'Transfer' }).click();
  }

  async expectSuccess(): Promise<void> {
    await expect(
      this.page.getByText('has been transferred from account')
    ).toBeVisible({ timeout: 10_000 });
  }
}
