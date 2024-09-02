-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    `rank` INT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Insertion des données
INSERT INTO users (username, password, email, `rank`, createdAt, updatedAt) VALUES
('admin', 'admin', 'admin@admin', 7, '2024-08-30 06:26:19', '2024-08-30 06:26:19'),
('user', 'user', 'user@user', 1, '2024-08-30 06:27:43', '2024-08-30 06:27:43');