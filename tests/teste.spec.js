// @ts-check
import { test, expect, chromium } from '@playwright/test';

test('homepage has title and links to intro page', async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto('https://itera-qa.azurewebsites.net/home/automation');

  const name = await page.$('#name');
  await name.type('John Doe', { delay: 50 });

  const phone = await page.$('#phone');
  await phone.type('123456789', { delay: 50 });

  const email = await page.$('#email');
  await email.type('johndoe@gmail.com', { delay: 50 });

  const password = await page.$('#password');
  await password.type('johndoe123', { delay: 50 });

  const address = await page.$('#address');
  await address.type('Rua 1, 14000-000', { delay: 50 });

  await page.click(
    'body > div.container.body-content > div:nth-child(3) > div.card-body > button'
  );

  await page.screenshot({ path: '../screenshots/screenshot.png' });
  
  await browser.close();
});
