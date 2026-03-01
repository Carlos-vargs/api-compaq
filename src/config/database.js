const { Sequelize } = require("sequelize");

const dialectOptions = {};
if (process.env.DB_DIALECT === "mssql" && process.env.DB_INSTANCE) {
  dialectOptions.instanceName = process.env.DB_INSTANCE;
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false,
    dialectOptions,
  },
);

module.exports = sequelize;
