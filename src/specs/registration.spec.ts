import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { buildUser } from '../core/test-data';

test.describe('Registration feature', () => {
  test('Successful registration', async ({ page }) => {
    const home = new HomePage(page);
    const reg  = new RegistrationPage(page);

    await home.open();
    await home.goToRegistration();

    const user = buildUser();
    await reg.fillForm(user);
    await reg.submit();
    await reg.expectSuccess();
  });
});
