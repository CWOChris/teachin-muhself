CREATE TABLE drivers (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50),
cars_id INT NOT NULL,
FOREIGN KEY (cars_id)
	REFERENCES cars(id)
    ON DELETE SET NULL