import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BienvenidaPage } from '../pages/BienvenidaPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { CustomWorld } from '../support/world.js';

Given(
  'que estoy en la página de login',
  async function (this: CustomWorld) {
    await this.loginPage.abrir();
    await expect(this.loginPage.emailInput).toBeVisible();
  }
);

When(
  'ingreso el correo {string} y la contraseña {string}',
  async function (
    this: CustomWorld,
    correo: string,
    contrasena: string
  ) {
    await this.loginPage.completarCredenciales(correo, contrasena);
  }
);

When(
  'presiono el botón Ingresar',
  async function (this: CustomWorld) {
    await this.loginPage.presionarIngresar();
  }
);

When(
  'intento iniciar sesión {int} veces con el correo {string} y la contraseña {string}',
  async function (
    this: CustomWorld,
    intentos: number,
    correo: string,
    contrasena: string
  ) {
    for (let i = 0; i < intentos; i++) {
      await this.loginPage.iniciarSesion(correo, contrasena);
    }
  }
);

Then(
  'debería ver el mensaje de error {string}',
  async function (
    this: CustomWorld,
    mensaje: string
  ) {
    await expect(this.loginPage.errorMessage).toHaveText(mensaje);
  }
);

Then(
  'debería ver la advertencia {string}',
  async function (
    this: CustomWorld,
    advertencia: string
  ) {
    await expect(this.loginPage.warningMessage).toHaveText(advertencia);
  }
);

Then(
  'debería permanecer en la página de login',
  async function (this: CustomWorld) {
    await expect(this.loginPage.page)
      .toHaveURL(LoginPage.URL_PATTERN);
  }
);

Then(
  'debería ser redirigido a la página principal',
  async function (this: CustomWorld) {
    await expect(this.bienvenidaPage.page)
      .toHaveURL(BienvenidaPage.URL_PATTERN);
  }
);

Then(
  'no debería ver ningún mensaje de error',
  async function (this: CustomWorld) {
    await expect(this.loginPage.errorMessage)
      .not.toBeVisible();
  }
);