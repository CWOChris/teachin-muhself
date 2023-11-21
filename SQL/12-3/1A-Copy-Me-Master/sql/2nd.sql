DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
CREATE TABLE biographies (
id INT NOT NULL auto_increment primary key,
name VARCHAR(100) NOT NULL,
author VARCHAR(100) NOT NULL,
price DECIMAL(6,2),
for_sale BOOLEAN DEFAULT (true)
);

INSERT INTO bestsellers (title, author, price) VALUES
("Book 1", "auth1", 19.95)
("Book 2", "auth2", 19.95)
("Book 3", "auth3", 19.95)

SELECT * FROM books.bestsellers;

-- SELECT * FROM bestsellers WHERE id = 3

-- UPDATE bestsellers SET price = 9.95 WHERE id = 2 OR id = 3 OR id = 4

-- UPDATE bestsellers SET for_sale = false WHERE id = 4

UPDATE bestsellers SET for_sale = false, title = "book56", author = "jimbob3" WHERE id = 2;
-- ORs and ANDs are following the "WHERE" and no where else