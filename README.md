# API COMPAQ

API Node.js robusta, modular y escalable para integración y extracción de datos desde bases de datos COMPAQ. Permite exponer información de sistemas COMPAQ mediante endpoints RESTful, siguiendo principios SOLID y DRY, con tipado JSDoc y tests automatizados.

---

## Tecnologías

- ![Node.js](https://img.shields.io/badge/Node.js-22.22.0-green)
- ![Express](https://img.shields.io/badge/Express-4.19.0-blue)
- ![Sequelize](https://img.shields.io/badge/Sequelize-6.35.1-orange)
- ![Jest](https://img.shields.io/badge/Jest-29.7.0-red)
- ![Supertest](https://img.shields.io/badge/Supertest-7.1.3-yellow)
- ![Base de datos](https://img.shields.io/badge/DB-MSSQL%20%7C%20MySQL-lightgrey)

---

## Requisitos Previos

- Node.js >= 22.22.0
- npm >= 9.x
- Acceso a una base de datos COMPAQ (MSSQL o MySQL)
- Docker (opcional, para despliegue y pruebas)

---

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Carlos-vargs/api-compaq.git
   cd api-compaq
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura el archivo de entorno:
   - Copia `.env.example` a `.env` y completa los valores:
     ```bash
     cp .env.example .env
     # Edita .env con tus credenciales de base de datos
     ```
   - Ejemplo de configuración:
     ```env
     DB_HOST=localhost
     DB_USER=usuario
     DB_PASS=contraseña
     DB_NAME=compaq_db
     DB_PORT=1433 # 1433 para MSSQL, 3306 para MySQL
     DB_DIALECT=mssql # o mysql
     PORT=3000
     ```
4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

---

## Estructura del Proyecto

```
api-compaq/
├── src/
│   ├── config/         # Configuración y conexión a la base de datos
│   ├── controllers/    # Lógica de negocio y manejo de peticiones HTTP (SRP)
│   ├── models/         # Definición de modelos ORM (Sequelize)
│   ├── routes/         # Definición de endpoints y rutas Express
│   ├── middlewares/    # Validación, manejo de errores y logging
│   ├── services/       # Lógica reusable y operaciones de negocio
│   ├── utils/          # Helpers y utilidades generales
├── migrations/         # Scripts de migración para la base de datos
├── tests/              # Pruebas automatizadas (Jest/Supertest)
├── docs/               # Documentación adicional
├── .env.example        # Ejemplo de configuración de entorno
├── package.json        # Configuración de dependencias y scripts
├── .gitignore          # Exclusiones para git
├── .gitattributes      # Configuración de finales de línea
├── .nvmrc              # Versión recomendada de Node.js
```

---

## Documentación de la API

| Endpoint       | Método | Descripción                                |
| -------------- | ------ | ------------------------------------------ |
| `/api/example` | GET    | Obtiene datos de ejemplo de la base COMPAQ |

> Para agregar nuevos endpoints, crea el controlador y la ruta correspondiente siguiendo la estructura y convenciones del proyecto.

---

## Scripts Disponibles

- `npm run dev` — Inicia el servidor en modo desarrollo con recarga automática.
- `npm start` — Inicia el servidor en modo producción.
- `npm test` — Ejecuta los tests automatizados.
- `npm run lint` — Ejecuta el linter ESLint sobre el código fuente.

---

## Convenciones de Código

- **JavaScript puro:** No se utiliza TypeScript.
- **Tipado con JSDoc:** Todas las funciones y clases deben estar documentadas con JSDoc (`@param`, `@returns`, `@typedef`).
- **CommonJS:** Uso de `require` y `module.exports` para módulos.
- **SOLID y DRY:** Separación estricta de responsabilidades y reutilización de código.
- **Manejo de errores:** Centralizado mediante middleware global en `src/middlewares/errorHandler.js`.

---

## Contribución

1. Haz fork del repositorio y crea una rama para tu feature o fix.
2. Sigue la estructura de carpetas y las convenciones de código.
3. Documenta tus funciones con JSDoc.
4. Agrega tests para cada endpoint nuevo en la carpeta `tests/`.
5. Envía tu Pull Request con una descripción clara de los cambios.
