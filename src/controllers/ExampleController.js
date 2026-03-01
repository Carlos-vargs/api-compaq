const ExampleService = require("../services/ExampleService");

exports.getExample = async (req, res, next) => {
  try {
    const data = await ExampleService.getExampleData();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
