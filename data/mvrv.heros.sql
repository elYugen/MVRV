-- Table for heroes
CREATE TABLE IF NOT EXISTS heros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sprite VARCHAR(255),
    icon VARCHAR(255),
    tier VARCHAR(10),
    health INT,
    difficulty INT,
    category VARCHAR(50),
    createdAt DATETIME,
    updatedAt DATETIME
);

-- Table for passives
CREATE TABLE IF NOT EXISTS passives (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT,
    name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (hero_id) REFERENCES heros(id)
);

-- Table for spells
CREATE TABLE IF NOT EXISTS spells (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_id INT,
    name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (hero_id) REFERENCES heros(id)
);