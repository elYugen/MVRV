-- Création de la table articles
CREATE TABLE IF NOT EXISTS articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cover TEXT NOT NULL,
    resume TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Insertion des données
INSERT INTO articles (name, cover, resume, content, createdAt, updatedAt) VALUES
('Bonjour ', 'https://leclaireur.fnac.com/wp-content/uploads/2024/03/marvel-rivals-jeu-1256x826.jpeg', 'je suis un résumer', 'salut ça va ?', '2024-08-30 14:33:42', '2024-08-31 15:14:35'),
('Nouvel articles', 'https://r.res.easebar.com/pic/20240816/22417df2-571e-4fd8-9b68-12bdb658ac18.jpg', 'c''est ça ouais', 'on va voir', '2024-08-31 15:22:51', '2024-08-31 15:23:33');