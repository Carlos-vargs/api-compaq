const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExampleModel = sequelize.define(
  "Example",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "example",
    timestamps: false,
  },
);

module.exports = ExampleModel;
