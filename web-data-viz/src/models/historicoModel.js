var database = require("../database/config");


function buscarNotas() {

  var instrucaoSql = `SELECT
	(SELECT count(resultado) FROM historico a WHERE resultado = 1) AS '1',
	(SELECT count(resultado) FROM historico a WHERE resultado = 2) AS '2',
	(SELECT count(resultado) FROM historico a WHERE resultado = 3) AS '3',
	(SELECT count(resultado) FROM historico a WHERE resultado = 4) AS '4',
	(SELECT count(resultado) FROM historico a WHERE resultado = 5) AS '5';`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


// ------------------------------------------------------------------------------------------------------

function historicoRota(resultado, id) {    
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucaoSql = `
      INSERT INTO historico (resultado,fk_usuario) VALUES ('${resultado}', '${id}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarNotas,
  
  historicoRota

}
