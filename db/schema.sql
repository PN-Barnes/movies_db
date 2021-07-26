DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    movie_name VARCHAR(100)
)

CREATE TABLE reviews (
    id INT AUTO_INCREMENT NOT NULL,
    movie_id INT NOT NULL,
    review TEXT
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
)