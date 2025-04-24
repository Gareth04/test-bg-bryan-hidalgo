import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { UpdateProfilePage } from '../pages/UpdateProfilePage';
import { buildUser, buildNewProfile } from '../core/test-data';

test.describe('Update Profile feature', () => {
  test('Update all personal data with random values', async ({ page }) => {
    const user = buildUser();
    const home = new HomePage(page);
    const reg  = new RegistrationPage(page);

    await home.open();
    await home.goToRegistration();
    await reg.fillForm(user);
    await reg.submit();                     

    const profilePage = new UpdateProfilePage(page);
    await profilePage.open();
    const newData = buildNewProfile();

    await page.locator('#customer\\.firstName').fill(newData.firstName);
    await page.locator('#customer\\.lastName').fill(newData.lastName);
    await page.locator('#customer\\.address\\.street').fill(newData.address);
    await page.locator('#customer\\.address\\.city').fill(newData.city);
    await page.locator('#customer\\.address\\.state').fill(newData.state);
    await page.locator('#customer\\.address\\.zipCode').fill(newData.zip);
    await page.locator('#customer\\.phoneNumber').fill(newData.phone);

    await page.getByRole('button', { name: 'Update Profile' }).click();

  });
});
