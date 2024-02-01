USE portefolio;

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

DROP TABLE IF EXISTS tool;

CREATE TABLE IF NOT EXISTS tool (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO skill (name) VALUES 
    ('TRELLO'),
    ('GITHUB'),
    ('MYSQL'),
    ('FIGMA');

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

    
DROP TABLE project;

CREATE TABLE
    project (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT
    );

INSERT INTO project (title, description) VALUES 
('GreenPoint', "Dans le cadre de mon projet 2 de mon bootcamp à la Wild Code School,  l'objectif principal  était de consommer une API. Nous avons souhaité aborder le problème de l'écologie. Nous avons donc imaginé un site qui permettrait de calculer l'empreinte carbone d'un utilisateur. Suivant son score final, il remporte un certain nombre de GreenPoint, qu'il va pouvoir échanger contre des récompenses telles qu'un bon de réduction sur trajet Blablacar, ou encore sur un abonnement de transport en commun de la région comme TBM. Nous souhaitions valoriser les comportements responsables et encourager ceux qui ne le sont pas encore!"), 
("L'avent-Garde", "Dans le cadre de mon premier Hackathon de mon bootcamp à la Wild Code School, nous avons développé un calendrier de l'avent de Noël. L'occasion à chaque petite boîte ouverte de découvrir une idée recette, activité ou encore idée cadeau ou film de Noël! Pour ce projet, nous travaillé avec les autres classes de la formation, classe PHP et la classe Data Analyst. Le but étant de coordonner nos compétences afin de concevoir un site viable et complet en 48h. La communication et l'entre-aide ont été les clés de ce projet collectif, épanouissant et abouti."),
("Externatic", "Dans le cadre de mon projet final de mon bootcamp à la Wild Code School, nous avions pour objectif de traiter des CV d'utilisateurs recherchant un emploi et de les mettre en relation avec des offres leur correspondant suivant leurs compétences, leur exigences salariales ou encore le type de contrat."),
("L'idéal de L'Oréal", "Dans le cadre du hackathon national de la Wild Code School, qui a duré 3 jours, nous avons du répondre à l'appel de l'Oréal où comment l'IA peut répondre aux besoins de nos clients. Nous avons donc développé un site mettant en relation les clients de l'Oréal avec les revendeurs locaux de l'Oréal également comme les coiffeurs ou encore les pharmacies. Le but étant de rentrer dans la démarche éco-responsable de notre client, pour favoriser la réduction de l'empreinte carbone. Nous avons imaginé un système aussi de fidélisation afin l'Oréal ainsi que ses clients s'en retrouvent favorisés.")
;

DROP TABLE project_skill;

CREATE TABLE
    project_skill (
        project_id INT NOT NULL,
        skill_id INT NOT NULL,
        PRIMARY KEY (project_id, skill_id),
        FOREIGN KEY (project_id) REFERENCES project(id),
        FOREIGN KEY (skill_id) REFERENCES skill(id),
        UNIQUE (project_id, skill_id)
    );