const express = require("express");
const ExampleController = require("../controllers/ExampleController");
const ClientController = require("../controllers/ClientController");

const router = express.Router();

router.get("/example", ExampleController.getExample);

/**
 * @route GET /clients
 * @desc Get all clients
 * @access Public
 */
router.get('/clients', ClientController.index);

module.exports = router;
