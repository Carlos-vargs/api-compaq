# API COMPAQ

API Node.js v22.22.0 robusta, modular y escalable, siguiendo SOLID y DRY, con ORM Sequelize y tests automatizados.

## Estructura

- `src/`
  - `config/` — configuración y conexión DB
  - `models/` — modelos ORM
  - `controllers/` — lógica de negocio (SRP)
  - `routes/` — definición de endpoints
  - `middlewares/` — validación, errores, logging
  - `services/` — lógica reusable
  - `utils/` — helpers
- `migrations/` — scripts de migración ORM
- `tests/` — tests automatizados (Jest/Supertest)
- `docs/` — documentación

## Instalación

```bash
npm install
```

## Variables de entorno

Ver `.env.example` y configurar `.env`.

## Scripts

- `npm run dev` — desarrollo
- `npm start` — producción
- `npm test` — ejecutar tests
- `npm run lint` — linting

## Principios

- SOLID y DRY estrictos
- Single Responsibility en controladores, servicios y modelos
- Tests automatizados para cada endpoint

## ORM y estructura COMPAQ

- Integración con Sequelize
- Modelos y migraciones para tablas COMPAQ

## Ejemplo de test

Ver `tests/example.test.js` para pruebas de endpoints.
