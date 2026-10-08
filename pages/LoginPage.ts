import { Locator, Page } from '@playwright/test';

/**
 * Page Object de login.html.
 * Encapsula los selectores y las acciones de la página de login.
 */
export class LoginPage {
  static readonly URL_PATTERN = /login\.html$/;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly ingresarButton: Locator;
  readonly errorMessage: Locator;
  readonly warningMessage: Locator;

  constructor(readonly page: Page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');

    this.ingresarButton = page.getByRole('button', {
      name: 'Ingresar'
    });

    this.errorMessage = page.locator('#error-message');
    this.warningMessage = page.locator('#warning-message');
  }

  async abrir(): Promise<void> {
    await this.page.goto(
      'http://www.cs.uns.edu.ar/~mll/temp/testing/hogwarts/login.html'
    );
  }

  async completarCredenciales(
    correo: string,
    contrasena: string
  ): Promise<void> {
    await this.emailInput.fill(correo);
    await this.passwordInput.fill(contrasena);
  }

  async presionarIngresar(): Promise<void> {
    await this.ingresarButton.click();
  }

  async iniciarSesion(
    correo: string,
    contrasena: string
  ): Promise<void> {
    await this.completarCredenciales(correo, contrasena);
    await this.presionarIngresar();
  }
}