import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[onclick="login()"]');
  }

  async navegar() {
    await this.page.goto(
      'http://www.cs.uns.edu.ar/~mll/temp/testing/hogwarts/login.html'
    );
  }

  async ingresarCorreo(correo: string) {
    await this.emailInput.fill(correo);
  }

  async ingresarContrasena(contrasena: string) {
    await this.passwordInput.fill(contrasena);
  }

  async hacerLogin() {
    await this.loginButton.click();
  }
}