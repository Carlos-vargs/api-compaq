const express = require("express");
const ExampleController = require("../controllers/ExampleController");
const AdmClienteController = require("../controllers/AdmClientsController");

const router = express.Router();

router.get("/example", ExampleController.getExample);
router.get('/clients', AdmClienteController.getClients);

module.exports = router;
