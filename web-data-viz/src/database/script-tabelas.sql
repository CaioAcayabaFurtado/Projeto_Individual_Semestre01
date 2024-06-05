
CREATE DATABASE RotaVerde;
drop database RotaVerde;
USE RotaVerde;

select * from usuario;
select * from historico;
truncate table historico;
select * from aviso;
truncate table usuario;
SELECT
	(SELECT count(resultado) FROM historico a WHERE resultado = 1) AS '1',
	(SELECT count(resultado) FROM historico a WHERE resultado = 2) AS '2',
	(SELECT count(resultado) FROM historico a WHERE resultado = 3) AS '3',
	(SELECT count(resultado) FROM historico a WHERE resultado = 4) AS '4',
	(SELECT count(resultado) FROM historico a WHERE resultado = 5) AS '5';

-- ---------------------------------------------------------------------------------------------------------------------------------------------------

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
	resultado int,
    fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- ---------------------------------------------------------------------------------------------------------------------------------------------------




