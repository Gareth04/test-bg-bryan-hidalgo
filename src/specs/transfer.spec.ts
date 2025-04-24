import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { buildUser } from '../core/test-data';

test.describe('Transfer feature', () => {
  test('Transfer funds after registration', async ({ page }) => {
    const user = buildUser();
    const home = new HomePage(page);
    const reg  = new RegistrationPage(page);
    await home.open();
    await home.goToRegistration();
    await reg.fillForm(user);
    await reg.submit();
    await page.getByRole('link', { name: 'Transfer Funds' }).click();
    await page.locator('#amount').fill('233');
    await page.getByRole('button', { name: 'Transfer' }).click();

  });
});
