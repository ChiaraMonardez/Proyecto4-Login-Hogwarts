import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';
import { BienvenidaPage } from '../pages/BienvenidaPage.js';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  loginPage!: LoginPage;
  bienvenidaPage!: BienvenidaPage;
}

setWorldConstructor(CustomWorld);