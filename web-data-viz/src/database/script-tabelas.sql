
CREATE DATABASE RotaVerde;
drop database RotaVerde;
USE RotaVerde;

select * from usuario;
select * from historico;
select * from aviso;
truncate table usuario;

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
	resultado int,
    fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
	-- fk_empresa INT,
	-- FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/*
create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
    resultado int,
		constraint FkResultadoMedida foreign key (resultado) references historico(resultado),
	-- momento DATETIME,
	fk_historico INT,
	FOREIGN KEY (fk_historico) REFERENCES historico(id)
);
*/

-- ---------------------------------------------------------------------------------------------------------------------------------------------------




