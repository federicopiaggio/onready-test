CREATE DATABASE ONREADY_TEST;
USE ONREADY_TEST;

CREATE TABLE vehiculos (
    Marca VARCHAR(20),
    Modelo VARCHAR(30),
    Puertas INT(2),
    Cilindrada VARCHAR(20),
    Precio DECIMAL (10,2)
);

INSERT INTO vehiculos (Marca,Modelo,Puertas,Cilindrada,Precio)
       VALUES ('Peugeot','206', 4, NULL, 200000),
              ('Honda','Titan', NULL, "125c", 60000),
              ('Peugeot','208', 5, NULL ,250000),
              ('Yamaha','YBR', NULL, "160c", 80500.50)

