import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { BienvenidaPage } from '../pages/BienvenidaPage.js';
import { CustomWorld } from './world.js';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false
  });

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.bienvenidaPage = new BienvenidaPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.browser.close();
});