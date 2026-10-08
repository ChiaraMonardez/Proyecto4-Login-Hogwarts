import { Page } from '@playwright/test';

/** Page Object de bienvenida.html, la página principal a la que redirige un login exitoso. */
export class BienvenidaPage {
  static readonly URL_PATTERN = /bienvenida\.html$/;
  static readonly TITLE_PATTERN = /Bienvenida/;

  constructor(readonly page: Page) {}
}
