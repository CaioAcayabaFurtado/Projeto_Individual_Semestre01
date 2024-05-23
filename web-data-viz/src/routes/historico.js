var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/:idHistorico", function (req, res) {
  historicoController.buscarHistoricoPorUsuario(req, res);
});

router.post("/historicoRota", function (req, res) {
  historicoController.historicoRota(req, res);
});

module.exports = router;