### Schema
CREATE DATABASE warehouse_db;
USE warehouse_db;

CREATE TABLE Products(

    ItemId INT(10) PRIMARY KEY AUTO_INCREMENT,

    ProductName VARCHAR(255) NOT NULL,

    Quantity INT(10),

    Price DECIMAL(6,2),

    ProductDetails VARCHAR(255)
 );