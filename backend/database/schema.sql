DROP TABLE IF EXISTS skill;

CREATE TABLE IF NOT EXISTS skill (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO skill (name) VALUES 
    ('HTML'),
    ('CSS'),
    ('JS'),
    ('REACT'),
    ('NODE.JS'),
    ('EXPRESS'),
    ('GIT'),
    ('SQL'),
    ('AGILE');

DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    UNIQUE (email)
);
INSERT INTO user (name, email, password)
VALUES ('Fred', 'frederique.druet@gmail.com', '1234');

