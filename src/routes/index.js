const express = require("express");
const ExampleController = require("../controllers/ExampleController");

const router = express.Router();

router.get("/example", ExampleController.getExample);

module.exports = router;
