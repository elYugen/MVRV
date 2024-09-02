-- Création de la table streamers
CREATE TABLE IF NOT EXISTS streamers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    picture TEXT NOT NULL,
    link TEXT NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

-- Insertion des données
INSERT INTO streamers (name, picture, link, createdAt, updatedAt) VALUES
('MarvelRivalsfr', 'https://static-cdn.jtvnw.net/jtv_user_pictures/00409dc9-32e6-4917-8d73-109a8201f53e-profile_image-70x70.png', 'https://twitch.tv/MarvelRivalsfr', '2024-09-01 20:59:11', '2024-09-01 20:59:11'),
('IkerTTVV', 'https://static-cdn.jtvnw.net/jtv_user_pictures/ea21fba0-a2cd-4689-98cf-f32c2bfae266-profile_image-70x70.png', 'https://twitch.tv/IkerTTVV', '2024-09-01 20:59:51', '2024-09-01 20:59:51'),
('thelangam', 'https://static-cdn.jtvnw.net/jtv_user_pictures/a5f9c2f9-6430-41f5-90bc-8308419a9710-profile_image-70x70.png', 'https://twitch.tv/thelangam', '2024-09-01 21:00:13', '2024-09-01 21:00:13');