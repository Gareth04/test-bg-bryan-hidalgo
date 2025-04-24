import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage';
import { buildUser } from '../core/test-data';

test.describe('Login feature', () => {
  test('Login after user has been created', async ({ page }) => {
    const user = buildUser();
    const home = new HomePage(page);
    const reg  = new RegistrationPage(page);

    await home.open();
    await home.goToRegistration();
    await reg.fillForm(user);
    await reg.submit(); 

    await page.getByRole('link', { name: 'Log Out' }).click();

    const login = new LoginPage(page);
    await login.login(user.username, user.password);
    
  });
});
