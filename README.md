# Test Automatizado - Parabank Prueba de Bryan Hidalgo

Este proyecto contiene una solución de automatización de pruebas usando **Playwright** para validar funcionalidades del portal bancario:  
🔗 [https://parabank.parasoft.com/parabank/index.htm](https://parabank.parasoft.com/parabank/index.htm)

## 🧪 Funcionalidades probadas

- Registro de usuario
- Login de usuario
- Transferencia de fondos
- Actualización de perfil

---

## ⚙️ Tecnologías y dependencias

- [Node.js](https://nodejs.org/en) `>=18.x`
- [Playwright](https://playwright.dev/) `^1.43.0`
- TypeScript `^5.x`
- Faker `^8.x` para generación de datos aleatorios
- Estructura organizada por Page Object Model (POM)

---

## 📦 Instalación del proyecto

1. Clona el repositorio:

```bash
git clone https://github.com/Gareth04/test-bg-bryan-hidalgo.git
cd test-bg-bryan-hidalgo

Instalacion de dependencias
- npm install
- npx playwright install

Ejecucion de pruebas General
- npx playwright test

Ejecucion de pruebas especificas
- npx playwright test src/specs/registration.spec.ts
- npx playwright test src/specs/login.spec.ts
- npx playwright test src/specs/transfer.spec.ts 
- npx playwright test src/specs/updateprofile.spec.ts

Reportes y pruebas

npx playwright show-report