DROP DATABASE IF EXISTS Warehouse_db;
CREATE DATABASE Warehouse_db;
USE AllSupply;

CREATE TABLE Products (
    ItemID INT PRIMARY KEY AUTO_INCREMENT, 
    productname VARCHAR(255), 
    departmentname VARCHAR(255), 
    price DECIMAL(6,2), 
    StockQuantity INT;