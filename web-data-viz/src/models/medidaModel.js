var database = require("../database/config");

function inserirMedidas(idHistorico) {

    var instrucaoSql = `insert into medidas values ('${idHistorico}','${resultado}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idHistorico, limite_linhas) {

    var instrucaoSql = `SELECT resultado, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                            FROM medida
                                WHERE fk_historico = ${idHistorico}
                                ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idHistorico) {

    var instrucaoSql = `SELECT resultado, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, fk_historico 
                            FROM medida WHERE fk_historico = ${idHistorico} 
                                ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    inserirMedidas
}
