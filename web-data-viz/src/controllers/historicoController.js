var historicoModel = require("../models/historicoModel");

function buscarHistoricoPorUsuario(req, res) {
  // var idUsuario = req.params.idUsuario;
  var historico = req.params.id;


  historicoModel.buscarHistoricoPorUsuario(historico).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json();
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os historicos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function historicoRota(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var total = req.body.totalServer;
  var id = req.body.idServer;


  // Faça as validações dos valores
  if (total == undefined) {
    res.status(400).send("Seu total está undefined!");
  } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    historicoModel.historicoRota(total, id)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro do resultado! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );


    // Faça as validações dos valores // SUPORTE SUGERIU
    }
}


function buscarNotas(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    historicoModel.buscarNotas()
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro do resultado! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );


    // Faça as validações dos valores // SUPORTE SUGERIU
    }





module.exports = {
  buscarHistoricoPorUsuario,
  historicoRota,
  buscarNotas
}