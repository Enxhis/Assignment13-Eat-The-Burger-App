-- drop database if already exists
DROP DATABASE IF EXISTS burgers_db;
-- create database 
CREATE DATABASE burgers_db;
USE burgers_db;

-- create burgers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(125) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

