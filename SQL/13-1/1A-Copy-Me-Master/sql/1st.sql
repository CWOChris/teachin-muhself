DROP DATABASE IF EXISTS books;
CREATE DATABASE books;
USE books;

CREATE TABLE bestsellers (
id INT,
title VARCHAR(100),
author VARCHAR(150),
sold BOOLEAN,
quantity INT
)