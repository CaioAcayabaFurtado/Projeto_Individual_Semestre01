var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/historico", function (req, res) {
  historicoController.buscarNotas(req, res);
});

router.post("/historicoRota", function (req, res) {
  historicoController.historicoRota(req, res);
});

module.exports = router;