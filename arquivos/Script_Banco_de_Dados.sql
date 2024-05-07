create database RotaVerde;
use RotaVerde;

create table empresa(
cnpj int primary key,
nome varchar (45),
senha varchar(45)
);

create table calculadora(
id_caculadora int auto_increment,
fk_empresa int,
	constraint FkEmpresaCalculadora foreign key (fk_empresa) references empresa (cnpj),
    constraint primary key (id_calculadora, fk_empresa)
);