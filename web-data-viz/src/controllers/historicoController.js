var historicoModel = require("../models/historicoModel");

function buscarHistoricoPorUsuario(req, res) {
  // var idUsuario = req.params.idUsuario;
  var idUsuario = req.params.id;


  historicoModel.buscarHistoricoPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os historicos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function historico(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var total = req.body.totalServer;
  

  // Faça as validações dos valores
  if (total == undefined) {
      res.status(400).send("Seu total está undefined!");
  } else {

      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      usuarioModel.historico(total)
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
  }
}

module.exports = {
  buscarHistoricoPorUsuario,
  historico
}