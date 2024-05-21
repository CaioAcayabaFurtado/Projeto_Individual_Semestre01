var database = require("../database/config");

function buscarHistoricoPorUsuario(id) {

  var instrucaoSql = `SELECT * FROM historico a WHERE fk_usuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function historico(resultado, id) {    
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
      INSERT INTO historico (resultado,fk_usuario) VALUES ('${resultado}', '${id}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarHistoricoPorUsuario,
  historico
}
