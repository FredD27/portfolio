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


