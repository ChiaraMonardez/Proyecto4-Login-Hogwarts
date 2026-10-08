# Proyecto 4 - Automatización de Login

Proyecto universitario de automatización de pruebas para el módulo de Login de la Obra Social de los Trabajadores de Hogwarts.

Se automatizan los casos **LOG-01 a LOG-13** utilizando **Cucumber, Playwright, TypeScript y Page Object Model (POM)**.

## Requisitos

- Node.js
- pnpm
- Conexión a internet

## Ejecución

Instalar dependencias:

```bash
pnpm install
```

Instalar los navegadores de Playwright:

```bash
pnpm exec playwright install
```

Ejecutar las pruebas:

```bash
pnpm test
```

Para ejecutar los casos que no están marcados como defecto:

```bash
pnpm exec cucumber-js --tags "not @defecto"
```

## Estructura

```text
Proyecto4-Login-Hogwarts/
├── features/
│   └── login.feature
├── pages/
│   ├── LoginPage.ts
│   └── BienvenidaPage.ts
├── steps/
│   └── login.steps.ts
├── support/
│   ├── hooks.ts
│   └── world.ts
├── cucumber.json
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

Los escenarios están definidos en Gherkin y los datos de prueba se pasan desde Cucumber a las Step Definitions y luego a los Page Objects, donde Playwright realiza las acciones sobre la aplicación.

El caso **LOG-13** está marcado como `@defecto` debido al comportamiento observado en la aplicación.

## Aplicación bajo prueba

http://www.cs.uns.edu.ar/~mll/temp/testing/hogwarts/login.html
