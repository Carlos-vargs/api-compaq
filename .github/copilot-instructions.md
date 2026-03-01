# Copilot Instructions for api-compaq

Guía para mantener la coherencia y calidad en futuras contribuciones automáticas con GitHub Copilot.

---

## 1. Tipado y Documentación

- **No usar TypeScript:** Todo el código debe ser JavaScript puro.
- **Tipado con JSDoc:** Todas las funciones, métodos y clases deben estar documentadas usando JSDoc. Incluye siempre:
  - `@param` para cada parámetro (tipo y descripción).
  - `@returns` para el valor de retorno (tipo y descripción).
  - `@typedef` para definir tipos de objetos complejos.

## 2. Estilo de Código

- **Módulos:** Usa exclusivamente CommonJS (`require`, `module.exports`). No utilices ESModules (`import`, `export`).
- **Consistencia:** Mantén el estilo actual en todo el proyecto (indentación, comillas, etc.).

## 3. Manejo de Errores

- **Patrón:** Los errores se manejan mediante un middleware global (`src/middlewares/errorHandler.js`).
- **Regla:** Siempre pasa los errores a `next(err)` en los controladores y servicios. No uses `try/catch` fuera de los controladores a menos que sea estrictamente necesario.
- **Respuesta:** El middleware responde con un JSON `{ error: <mensaje> }` y código 500 por defecto.

## 4. Estructura de Carpetas

- **src/config/**: Configuración y conexión a la base de datos.
- **src/models/**: Definición de modelos ORM (Sequelize).
- **src/controllers/**: Lógica de negocio y manejo de peticiones HTTP (Single Responsibility).
- **src/routes/**: Definición de endpoints y rutas Express.
- **src/middlewares/**: Middlewares para validación, manejo de errores y logging.
- **src/services/**: Lógica reusable y operaciones de negocio desacopladas de los controladores.
- **src/utils/**: Helpers y utilidades generales.
- **migrations/**: Scripts de migración para la base de datos.
- **tests/**: Pruebas automatizadas (Jest/Supertest).
- **docs/**: Documentación adicional del proyecto.

## 5. Validación

- **Estandar actual:** No se utiliza Zod, Joi ni otra librería de validación. Si se requiere validación, implementa validaciones manuales en los middlewares o controladores siguiendo el patrón del proyecto.

## 6. Otros Principios

- **SOLID y DRY:** Mantén la separación de responsabilidades y evita duplicidad de código.
- **Testing:** Todo endpoint nuevo debe tener su test correspondiente en la carpeta `tests/`.

---

**Resumen:** Mantén JavaScript puro con CommonJS, documenta todo con JSDoc, maneja errores vía middleware global, respeta la estructura de carpetas y realiza validaciones manuales. Ubica cada nuevo archivo en la carpeta correspondiente según su función.