
CREATE DATABASE RotaVerde;
drop database RotaVerde;
USE RotaVerde;

select * from usuario;
truncate table usuario;

-- ---------------------------------------------------------------------------------------------------------------------------------------------------
/*
CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);
*/


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cnpj varchar (14),
	email VARCHAR(50),
    telefone varchar (15),
    cep char (8),
    numero varchar (10),
    complemento varchar (45),
	senha VARCHAR(50)
	-- fk_empresa INT,
	-- FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


create table historico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
	-- fk_empresa INT,
	-- FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);


create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	-- dht11_umidade DECIMAL,
	-- dht11_temperatura DECIMAL,
	-- luminosidade DECIMAL,
	-- lm35_temperatura DECIMAL,
    resultado VARCHAR (45),
	chave TINYINT,
	momento DATETIME,
	fk_historico INT,
	FOREIGN KEY (fk_historico) REFERENCES historico(id)
);


-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);



