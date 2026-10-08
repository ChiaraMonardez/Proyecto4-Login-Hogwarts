import { IWorldOptions, World, setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { BienvenidaPage } from '../../src/pages/BienvenidaPage';
import { LoginPage } from '../../src/pages/LoginPage';


const BASE_URL = 'http://www.cs.uns.edu.ar/~mll/temp/testing/hogwarts/';

/* El world es el objeto compartido entre cucumber y playwright. 
    cada esnecario recibe una instancia nueva con su navegador y sus page object. 
*/
export class CustomWorld extends World {
  readonly baseUrl: string;
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  bienvenidaPage!: BienvenidaPage;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl = this.parameters.baseUrl ?? BASE_URL;
  }
}

setWorldConstructor(CustomWorld);
