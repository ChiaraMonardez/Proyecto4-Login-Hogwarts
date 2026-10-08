import { After, Before, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { BienvenidaPage } from '../../src/pages/BienvenidaPage';
import { LoginPage } from '../../src/pages/LoginPage';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: process.env.HEADLESS !== 'false' });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page, this.baseUrl);
  this.bienvenidaPage = new BienvenidaPage(this.page);
});

After(async function (this: CustomWorld, { result }) {
  try {
    // Si el escenario falla, adjuntamos una captura al reporte HTML
    if (result?.status === Status.FAILED && this.page) {
      this.attach(await this.page.screenshot(), 'image/png');
    }
  } finally {
    await this.browser?.close();
  }
});
