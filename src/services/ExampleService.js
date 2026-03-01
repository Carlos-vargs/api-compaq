const ExampleModel = require("../models/ExampleModel");

exports.getExampleData = async () => {
  return await ExampleModel.findAll();
};
