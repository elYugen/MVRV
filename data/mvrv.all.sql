-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 02 sep. 2024 à 19:31
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mvrv`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `cover` text NOT NULL,
  `resume` text NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `name`, `cover`, `resume`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'Bonjoue', 'https://leclaireur.fnac.com/wp-content/uploads/2024/03/marvel-rivals-jeu-1256x826.jpeg', 'je suis un résumer', 'salut ça va ?', '2024-08-30 14:33:42', '2024-09-02 17:39:36'),
(2, 'Nouvel articles', 'https://r.res.easebar.com/pic/20240816/22417df2-571e-4fd8-9b68-12bdb658ac18.jpg', 'c\'est ça ouais', 'on va voir', '2024-08-31 15:22:51', '2024-08-31 15:23:33');

-- --------------------------------------------------------

--
-- Structure de la table `heros`
--

CREATE TABLE `heros` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `sprite` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `tier` varchar(10) DEFAULT NULL,
  `health` int DEFAULT NULL,
  `difficulty` int DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `heros`
--

INSERT INTO `heros` (`id`, `name`, `sprite`, `icon`, `tier`, `health`, `difficulty`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'Spider-Man', '../../charfullbody/spiderman.png', '../charicon/Spider-Man.png', 'S+', 250, 5, 'dps', '2024-08-31 11:51:48', '2024-08-31 11:51:48'),
(2, 'Magneto', '../../charfullbody/magneto.png', '../charicon/Magneto.png', 'A+', 650, 2, 'tank', '2024-08-31 12:02:24', '2024-08-31 12:02:24'),
(3, 'Thor', '../../charfullbody/thor.png', '../charicon/Thor.png', 'B', 600, 2, 'Tank', '2024-08-31 17:24:44', '2024-08-31 17:24:44'),
(4, 'Peni Parker', '../../charfullbody/penniparker.png', '../charicon/pennyparker.png', 'B', 600, 3, 'Tank', '2024-08-31 17:25:01', '2024-08-31 17:25:01'),
(5, 'Star-Lord', '../../charfullbody/starlord.png', '../charicon/Starlord.png', 'B', 250, 2, 'Dps', '2024-08-31 17:25:07', '2024-08-31 17:25:07'),
(6, 'Adam Warlock', '../../charfullbody/adamwarlock.png', '../charicon/Adam.png', 'A', 250, 2, 'Heal', '2024-08-31 17:29:34', '2024-08-31 17:29:34'),
(7, 'Jeff The Land Shark', '../../charfullbody/jeff.png', '../charicon/Jeff.png', 'B', 250, 2, 'Heal', '2024-08-31 17:34:57', '2024-08-31 17:34:57'),
(8, 'Bruce Banner/Hulk', '../../charfullbody/hulk.png', '../charicon/hulk.png', 'A+', 900, 4, 'Tank', '2024-08-31 17:36:32', '2024-08-31 17:36:32'),
(9, 'Namor', '../../charfullbody/namor.png', '../charicon/Namor.png', 'B', 250, 2, 'Dps', '2024-08-31 17:39:14', '2024-08-31 17:39:14'),
(10, 'Punisher', '../../charfullbody/punisher.png', '../charicon/punisher.png', 'S+', 300, 1, 'Dps', '2024-08-31 17:43:36', '2024-08-31 17:43:36'),
(11, 'Storm', '../../charfullbody/storm.png', '../charicon/storm.png', 'A', 250, 3, 'Dps', '2024-08-31 17:44:18', '2024-08-31 17:44:18'),
(12, 'Loki', '../../charfullbody/loki.png', '../charicon/loki.png', 'A+', 250, 4, 'Heal', '2024-08-31 17:44:53', '2024-08-31 17:44:53'),
(13, 'Doctor Strange', '../../charfullbody/strange.png', '../charicon/Strange.png', 'A', 650, 3, 'Tank', '2024-08-31 17:45:31', '2024-08-31 17:45:31'),
(14, 'Mantis', '../../charfullbody/mantis.png', '../charicon/Mantis.png', 'A', 250, 1, 'Heal', '2024-08-31 17:53:26', '2024-08-31 17:53:26'),
(15, 'Rocket Raccoon', '../../charfullbody/raccoon.png', '../charicon/RocketRacoon.png', 'S+', 250, 1, 'Heal', '2024-08-31 17:53:48', '2024-08-31 17:53:48'),
(16, 'Hela', '../../charfullbody/hela.png', '../charicon/Hera.png', 'A+', 250, 3, 'Dps', '2024-08-31 17:54:52', '2024-08-31 17:54:52'),
(17, 'Black Panther', '../../charfullbody/blackpanther.png', '../charicon/Black-Panthere.png', 'A', 300, 4, 'Dps', '2024-08-31 17:55:09', '2024-08-31 17:55:09'),
(18, 'Groot', '../../charfullbody/groot.png', '../charicon/Groot.png', 'A', 900, 1, 'Tank', '2024-08-31 17:55:33', '2024-08-31 17:55:33'),
(19, 'Magik', '../../charfullbody/magik.png', '../charicon/Magic.png', 'A', 250, 3, 'Dps', '2024-08-31 17:56:42', '2024-08-31 17:56:42'),
(20, 'Luna Snow', '../../charfullbody/lunasnow.png', '../charicon/Lady-Frost.png', 'A', 400, 3, 'Heal', '2024-08-31 17:57:14', '2024-08-31 17:57:14'),
(21, 'Iron Man', '../../charfullbody/ironman.png', '../charicon/IronMan.png', 'A', 250, 2, 'Dps', '2024-08-31 17:57:42', '2024-08-31 17:57:42'),
(22, 'Sorcière Rouge', '../../charfullbody/scarlet.png', '../charicon/Wanda.png', 'C', 250, 1, 'Dps', '2024-08-31 17:58:17', '2024-08-31 17:58:17'),
(23, 'Venom', '../../charfullbody/venom.png', '../charicon/Venom.png', 'S+', 800, 3, 'Tank', '2024-08-31 17:58:33', '2024-08-31 17:58:33');

-- --------------------------------------------------------

--
-- Structure de la table `passives`
--

CREATE TABLE `passives` (
  `id` int NOT NULL,
  `hero_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `passives`
--

INSERT INTO `passives` (`id`, `hero_id`, `name`, `description`) VALUES
(1, 1, 'Sens de l\'araignée', 'Vous êtes averti de la présence d\'un ennemi.'),
(2, 1, 'Grimpeur de mur', 'Appuyez sur la touche de saut afin de grimper sur les surfaces verticales et appuyez sur le bouton d\'attaque principale afin de courir dessus.'),
(3, 2, 'Descente magnétique', 'Maintenez la touche de saut afin de tomber lentement.'),
(4, 3, 'Thorforce', 'Après avoir utilisé une compétence, lancer Mjolnir Bash accorde un point de Thorforce.'),
(5, 4, 'Grimpeuse de mur', 'Appuyez sur la touche de saut afin de grimper sur les surfaces verticales.'),
(6, 5, 'Null', 'Null'),
(7, 6, 'Cocon régénératif', 'Une fois que son corps a été détruit, Adam peut librement bouger en tant qu\'âme et reconstruire son corps à un endroit choisi.'),
(8, 7, 'Gentillesse inconsciente', 'Réduit les dégâts provenant des coups critiques.'),
(9, 8, 'Bond incroyable', 'Maintenez la touche de saut afin de faire un saut chargé qui permet à Hulk (Héros) d\'amener au sol un ennemi se trouvant en l\'air.'),
(10, 9, 'Aucun', 'Aucune capacité passive définie pour ce personnage.'),
(11, 10, 'Regard du guerrier', 'Vous pouvez voir pour une courte durée les ennemis qui quittent votre vision.'),
(12, 11, 'Null', 'Null'),
(13, 12, 'Null', 'Null'),
(14, 13, 'Le prix de la magie', 'De la magie noire s\'accumule lorsque vous infligez des dégâts à un ennemi. Si vous ne libérez pas cette magie noire, Docteur Strange subira un effet d\'anti-soin.'),
(15, 14, 'Faveur de la nature', 'Vous recevez un bonus de vitesse de déplacement tant que vous n\'êtes pas blessé et que vous soignez en consumant des orbes de vie.'),
(16, 15, 'Escalade sauvage', 'Maintenez la touche de saut afin d\'escalader un mur.'),
(17, 15, 'As du vol', 'Maintenez la touche de saut afin de descendre lentement.'),
(18, 16, 'Tempête de corbeaux de Nastrond', 'Un corbeau de Nastrond apparaîtra là où vous avez vaincu un ennemi. Celui-ci explose peu de temps après./Maintenez la touche de saut afin de tomber lentement.'),
(19, 17, 'Ruse de la Panthère', 'Inflige plus de dégâts lorsque la santé est basse.'),
(20, 17, 'Pas Subtil', 'Maintenez Espace pour courir sur un mur ; effectuez un saut après vous être détaché du mur.'),
(21, 18, 'Colosse floral', 'Les murs de bois se trouvant près de Groot s\'éveillent, ce qui active leurs effets supplémentaires.'),
(22, 19, 'Puissance des Limbes', 'Les dégâts que vous infligez sont convertis en vie supplémentaire.'),
(23, 20, 'Patineuse élégante', 'Vous vous rendez automatiquement de la santé lorsque vous utilisez Art de la glace ou Froid absolu./Lorsque vous avancez, vous vous mettez à patiner.'),
(24, 21, 'Null', 'Null'),
(25, 22, 'Télékinésie', 'Maintenez la touche de saut afin de tomber lentement.'),
(26, 23, 'Biologie Extraterrestre', 'Appuyez sur Espace pour grimper aux murs et, tout en grimpant, appuyez sur le clic gauche pour sprinter.');

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('NphQwXR5ptuqtAupZsMWqFnApwwz8iZX', '2024-09-03 19:29:15', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-09-03T19:29:15.938Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1,\"username\":\"admin\",\"rank\":7}', '2024-09-02 19:29:15', '2024-09-02 19:29:15'),
('tOrGlUIDz3Js0s3vE7sRSkK7qFke5c1E', '2024-09-03 17:50:09', '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2024-09-03T17:31:50.971Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1,\"username\":\"admin\",\"rank\":7}', '2024-09-02 17:31:50', '2024-09-02 17:50:09');

-- --------------------------------------------------------

--
-- Structure de la table `spells`
--

CREATE TABLE `spells` (
  `id` int NOT NULL,
  `hero_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `spells`
--

INSERT INTO `spells` (`id`, `hero_id`, `name`, `description`) VALUES
(1, 1, 'Frappe du traceur', 'Vous frappez devant vous, et vous infligez des dégâts supplémentaires aux ennemis affligés par un Spider-traceur.'),
(2, 1, 'Balancement', 'Vous tirez une toile afin de vous balancer.'),
(3, 1, 'Toile de rapprochement', 'Vous tirez une toile afin de rapprocher l\'ennemi touché vers vous. Si cet ennemi est affligé par un Spider-traceur, c\'est Spider-Man qui se rapprochera vers l\'ennemi touché.'),
(4, 1, 'Projection aérienne', 'Vous projetez les ennemis en l\'air, les ennemis affligés par un Spider-traceur subissent des dégâts supplémentaires.'),
(5, 1, 'Tir de Spider-traceur', 'Vous tirez une toile qui inflige des dégâts et afflige les ennemis touchés d\'un Spider-traceur.'),
(6, 1, 'Explosion de toile', 'Vous provoquez une explosion de toile tout autour de vous, ce qui inflige des dégâts aux ennemis tout en les assommant.'),
(7, 2, 'Orbes magnétiques', 'Vous tirez une volée d\'orbes magnétiques devant vous.'),
(8, 2, 'Rideau métallique', 'Vous manipulez le champ magnétique afin de former un rideau métallique qui bloque tous les projectiles.'),
(9, 2, 'Bouclier en métal', 'Vous générez un bouclier en métal et l\'appliquez sur un allié ciblé. Les dégâts absorbés par le bouclier sont convertis en anneaux qui se trouvent au dos de Magnéto.'),
(10, 2, 'Canon magnétique', 'Vous convertissez les anneaux de fer qui se trouvent au dos de Magnéto en un canon magnétique et vous projetez une masse métallique devant vous. Les dégâts de cette capacité augmentent avec le nombre d\'anneaux accumulés, et repoussent l\'ennemi touché si cette capacité a été pleinement chargée.'),
(11, 2, 'Météore de fer', 'Vous manipulez le champ magnétique afin d\'y attirer la matière et des projectiles afin de créer un météore de fer gigantesque qui inflige des dégâts massifs dans la zone ciblée à l\'impact.'),
(12, 3, 'Mjolnir Bash', 'Manier Mjolnir pour frapper un ennemi. Quand il est éveillé, Thor peut lancer des vagues d\'arc de foudre pour faire des dégâts.'),
(13, 3, 'Lancer de Mjolnir', 'Lance Mjolnir en avant qui revient après un court instant.'),
(14, 3, 'Tourbillon de Mjolnir', 'Maintiens pour faire tourner Mjolnir avant de s\'élancer en avant et repousser les ennemis.'),
(15, 3, 'Invocation d\'éclairs', 'Invoque des éclairs pour restaurer la Thorforce basé sur le nombre d\'ennemis touchés. Ralentit les ennemis.'),
(16, 3, 'Éveil divin', 'Consomme toute la Thorforce pour entrer dans l\'état éveillé, octroyant de la vie supplémentaire et améliorant Mjolnir Bash.'),
(17, 3, 'Frappe du dieu de la foudre', 'Dieu de la foudre Thor s\'envole et frappe le sol après la durée de la charge.'),
(18, 4, 'Cyber-toile', 'Vous projetez une cyber-toile.'),
(19, 4, 'Spider-nid', 'Vous générez un Spider-nid sur une zone ciblée. Le Spider-nid générera alors des Spider-drones et créera une Cyber-toile.'),
(20, 4, 'Arachno-mines', 'Vous déployez des Arachno-mines qui peuvent être cachées au sein d\'une Cyber-toile.'),
(21, 4, 'Ficelle de toile', 'Vous tirez une ficelle de toile qui se lie à une zone ciblée ou à une Cyber-toile. Si la ficelle de toile est trop étirée, elle causera un rappel.'),
(22, 4, 'Toile futuriste', 'Vous tirez une toile futuriste qui immobilise l\'ennemi touché. Cette capacité génère une Cyber-toile si elle frappe l\'environnement.'),
(23, 4, 'Amélioration SP//dr', 'Vous améliorez l\'armure SP//dr. Vous repoussez les ennemis se trouvant sur votre chemin tout en déployant périodiquement des Arachno-mines, des Spider-drones et des Cyber-toiles.'),
(24, 5, 'Flingues élémentaires', 'Vous tirez vers les ennemis avec vos deux flingues élémentaires.'),
(25, 5, 'Propulsion', 'Vous vous déplacez plus rapidement à l\'aide de vos propulseurs.'),
(26, 5, 'Tir frénétique', 'Vous tirez frénétiquement, infligeant des dégâts aux ennemis à portée.'),
(27, 5, 'Esquive et recharge', 'Vous esquivez vers la direction où vous vous dirigiez, et vous rechargez vos flingues.'),
(28, 5, 'Vol libre', 'Vous volez librement et vous visez automatiquement les ennemis en vue.'),
(29, 6, 'Énergie quantique', 'Lance de l\'énergie quantique pour faire des dégâts.'),
(30, 6, 'Explosion quantique', 'Rassemble de l\'énergie quantique durant un temps et la relâche sur les ennemis.'),
(31, 6, 'Liens d\'âmes', 'Unit l\'âme des alliés sous forme de liens, octroyant du soin sur la durée et répartissant les dégâts le long du lien.'),
(32, 6, 'Flux vital', 'Cible un allié avec un flux d\'énergie vitale rebondissant qui le soigne aussi au moment du lancement. Lance la compétence sur lui-même s\'il ne cible personne.'),
(33, 6, 'Éveil karmique', 'Éveille le karma des alliés pour les ressusciter. Les alliés ressuscités n\'ont pas beaucoup de vie mais bénéficient d\'une courte période d\'invincibilité.'),
(34, 7, 'Joyeuse éclaboussure', 'Jeff expulse un jet de soin/Éclaboussure d\'eau Il lance une sphère d\'eau rapide qui explose à l\'impact, blessant les ennemis.'),
(35, 7, 'Cache-Cache', 'Jeff plonge dans le sol, exposant seulement sa nageoire dorsale, ce qui lui octroie une vitesse supplémentaire et lui permet de grimper les murs.'),
(36, 7, 'Bulle de soin', 'Crache une bulle qui soigne l\'allié qui la collecte et augmente tous les soins reçus par cet allié.'),
(37, 7, 'C\'est Jeff!', 'Jeff plonge dans le sol et refait surface pour avaler ennemis et alliés dans une large zone, activant Cache-Cache pour une courte durée avant de les éjecter.'),
(38, 8, 'Coup puissant', 'Vous frappez les ennemis qui se trouvent en face de vous.'),
(39, 8, 'Garde indestructible', 'Vous et vos alliés proches gagnez un bouclier gamma qui absorbe les dégâts, ces dégâts absorbés sont ensuite convertis en énergie pour HULK ÉCRASE !'),
(40, 8, 'Confinement radioactif', 'Vous envoyez de l\'énergie gamma qui place l\'ennemi touché dans un vide quantique qui l\'immobilise et l\'immunise aux effets de toutes les capacités pendant la durée de cette capacité.'),
(41, 8, 'Rafale de gamma', 'Vous envoyez une rafale de rayon gamma qui inflige des dégâts.'),
(42, 8, 'HULK ÉCRASE !', 'Vous déchaînez l\'énergie gamma emmagasinée en vous. Hulk se transforme et devient monstrueux pour une courte durée.'),
(43, 9, 'Lancer de trident', 'Vous lancez le trident devant vous, qui lorsque vous touchez un ennemi réduit le temps de recharge de Domination aquatique.'),
(44, 9, 'Barrière volante', 'Vous conjurez une barrière qui vous protège pendant que vous volez.'),
(45, 9, 'Invocation d\'engeance', 'Vous invoquez une engeance monstrueuse qui attaque automatiquement les ennemis.'),
(46, 9, 'Ordre d\'attaque', 'Vous lancez le trident afin de frapper un ennemi proche. Si vous touchez un ennemi, vous ordonnez à toutes les engeances monstrueuses d\'attaquer cet ennemi.'),
(47, 9, 'Invocation de Giganto', 'Vous invoquez Giganto afin d\'écraser les ennemis se trouvant dans une zone ciblée.'),
(48, 10, 'Arsenal double', 'Vous tirez sur les ennemis à l\'aide de votre fusil automatique, Adjudication./Vous tirez sur les ennemis à l\'aide de votre fusil à pompe, Délivrance.'),
(49, 10, 'Câble de déplacement', 'Vous lancez un câble qui permet au Punisher de se déplacer rapidement.'),
(50, 10, 'Tourelle de Suppression', 'Déploie une Tourelle de Suppression qui immobilise le Punisher tout en infligeant des dégâts massifs.'),
(51, 10, 'Grenade fumigène', 'Vous lancez une grenade fumigène qui obscurcit la vision des ennemis.'),
(52, 10, 'Déchaînement de feu', 'Vous déchaînez deux canons rotatifs et tirez des missiles afin d\'abattre vos ennemis.'),
(53, 11, 'Lames de vent', 'Vous lancez des lames de vent.'),
(54, 11, 'Changement météo', 'Vous changez la météo et octroyez un bonus aux alliés proches. Tempête pour accorder un bonus de vitesse de déplacement; Tonnerre afin d\'accorder un bonus de dégâts.'),
(55, 11, 'Canalisation météorologique', 'Vous canalisez le pouvoir de la météo afin d\'amplifier les pouvoirs de Tornade. Tempête afin de lui accorder un bonus de vitesse de déplacement; Tonnerre afin de lui accorder un bonus de dégâts et lui permet d\'invoquer des frappes de tonnerre qui infligent des dégâts aux adversaires.'),
(56, 11, 'Frappe de foudre', 'Vous déchaînez une frappe de foudre.'),
(57, 11, 'Ouragan', 'Vous vous transformez en un ouragan qui aspire les ennemis proches et leur inflige des dégâts.'),
(58, 12, 'Missiles mystiques', 'Vous tirez des missiles mystiques pour soit soigner vos alliés, soit pour frapper vos ennemis.'),
(59, 12, 'Champ de runes', 'Utilisez des pierres de runes afin de créer un champ magique qui convertit les dégâts subis par les alliés se trouvant au sein de ce cercle en énergie de soin.'),
(60, 12, 'Projection illusoire', 'Vous projetez un double illusoire qui permet de lancer certaines capacités de Loki.'),
(61, 12, 'Permutation', 'Vous échangez de place avec un double illusoire ciblé.'),
(62, 12, 'Coup de poignard', 'Vous assenez un coup de poignard à un ennemi proche, vous infligez des dégâts supplémentaires si vous l\'attaquez par derrière.'),
(63, 12, 'Discorde invisible', 'Vous devenez invisible et invoquez un double illusoire afin de mener vos ennemis en discorde.'),
(64, 12, 'Métamorphose', 'Vous vous transformez en un allié ou un ennemi ciblé, ce qui vous permet d\'utiliser leurs capacités.'),
(65, 13, 'Dagues de Denak', 'Vous projetez des dagues de Denak.'),
(66, 13, 'Lévitation mystique', 'Vous prenez de l\'altitude puis vous volez pour une courte durée.'),
(67, 13, 'Déchaînement obscur', 'Vous déchaînez de la magie noire qui inflige des dégâts aux ennemis proches.'),
(68, 13, 'Portail dimensionnel', 'Vous ouvrez un portail entre deux lieux qui peut être emprunté par tous les personnages.'),
(69, 13, 'Barrière mystique', 'Vous créez une barrière qui absorbe les dégâts.'),
(70, 13, 'Extraction de l\'âme', 'Vous arrachez l\'âme de vos ennemis de leur corps, ce qui les assomme pour la période de la compétence. Les dégâts infligés à l\'âme de votre adversaire sont directement transmis au corps physique de ce dernier.'),
(71, 14, 'Ronce vitale', 'Vous tirez une ronce d\'énergie vitale, et vous gagnez une orbe de vie si vous effectuez un coup critique.'),
(72, 14, 'Spore soporifique', 'Vous projetez une spore qui endort l\'ennemi le plus proche.'),
(73, 14, 'Transfert de puissance', 'Vous consumez une orbe de vie afin de donner à un allié un bonus de dégâts.'),
(74, 14, 'Absorption de puissance', 'Vous consumez une orbe de vie afin de vous donner un bonus de dégâts.'),
(75, 14, 'Soin régénérant', 'Vous consumez une orbe de vie afin de donner du soin régulier à un allié.'),
(76, 14, 'Aura de vitalité', 'Vous libérez de l\'énergie vitale autour de vous. Vous accordez du soin régulier ainsi qu\'un bonus de vitesse de déplacement aux alliés adjacents.'),
(77, 15, 'Tir double', 'Vous tirez des projectiles qui infligent des dégâts./Vous tirez des orbes rebondissantes qui soignent les alliés.'),
(78, 15, 'Propulsion de jetpack', 'Vous vous propulsez vers l\'avant.'),
(79, 15, 'Tour de retour au combat', 'Vous déployez une tour de retour au combat qui réanime un allié vaincu et qui produit périodiquement des packs d\'armure et des charges de Propulsion de jetpack pour Rocket Raccoon.'),
(80, 15, 'Amplificateur de puissance', 'Vous déployez un amplificateur de puissance qui accorde un bonus de dégâts aux personnages alliés proches.'),
(81, 16, 'Ronces de l\'épée de nuit', 'Vous projetez des ronces de l\'épée de nuit.'),
(82, 16, 'Nuée de corbeaux', 'Vous vous transformez en une nuée de corbeaux de Hel et volez. Réappuyez sur la touche de la compétence afin de revenir à votre forme normale.'),
(83, 16, 'Sphère de Hel', 'Vous projetez une sphère de Hel qui explose, assommant tous les ennemis proches.'),
(84, 16, 'Explosion de ronces', 'Vous projetez de multiples ronces de l\'épée de nuit qui explosent peu de temps après.'),
(85, 16, 'Pluie de corbeaux', 'Vous vous envolez jusqu\'au ciel afin de projeter des corbeaux de Nastrond à volonté.'),
(86, 17, 'Griffes en Vibranium', 'Frappe avec les griffes en Vibranium vers l\'avant.'),
(87, 17, 'Bond du félin', 'S\'élance en avant et inflige des dégâts aux ennemis. Toucher un ennemi affecté par une Marque de Vibranium produit un bonus de santé et réinitialise la capacité. Gagne 50 de bouclier si des ennemis sont touchés.'),
(88, 17, 'Tourbillon de Vibranium', 'Tournoie vers l\'avant et applique une Marque de Vibranium aux ennemis touchés.'),
(89, 17, 'Lance d\'énergie', 'Lance une lance d\'énergie en Vibranium vers l\'avant, créant un Champ de Force en Vibranium et appliquant une Marque de Vibranium aux ennemis dans son rayon.'),
(90, 17, 'Invocation de Bast', 'Invoque Bast pour bondir en avant, infligeant des dégâts.'),
(91, 18, 'Lianes attaquantes', 'Vous lancez des lianes pour attaquer vos ennemis.'),
(92, 18, 'Mur lacéronce', 'Vous ciblez une zone et vous y faites pousser un mur lacéronce. Lorsqu\'éveillé, le mur frappera les ennemis proches qui sont attaqués par Groot et ses alliés.'),
(93, 18, 'Mur bois-de-fer', 'Vous ciblez une zone et vous y faites pousser un mur bois-de-fer. Lorsqu\'éveillé, le mur vous accorde de la vie supplémentaire lorsque des ennemis proches subissent des dégâts.'),
(94, 18, 'Bombe de spores', 'Vous lancez une bombe de spore explosive qui se scinde en plusieurs petites explosions de spores.'),
(95, 18, 'Emprisonnement végétal', 'Vous lancez une massive grappe de lianes qui amène les ennemis en son centre et les emprisonne.'),
(96, 19, 'Épée de l\'âme', 'Vous frappez devant vous avec l\'épée de l\'âme.'),
(97, 19, 'Disque à pas', 'Vous sautez à travers un disque à pas, ce qui vous téléporte un peu plus loin selon votre déplacement.'),
(98, 19, 'Ruée démoniaque', 'Vous vous ruez en avant, puis vous projetez un ennemi en l\'air.'),
(99, 19, 'Tourbillon de l\'âme', 'En sortant d\'un disque à pas, vous pouvez faire tournoyer votre épée de l\'âme.'),
(100, 19, 'Frappe tranchante', 'Vous frappez avec une attaque tranchante à distance.'),
(101, 19, 'Invocation des Limbes', 'En sortant d\'un disque à pas, vous pouvez invoquer un démon des Limbes qui attaque les ennemis.'),
(102, 19, 'Transformation Darkchild', 'Vous vous transformez en Darkchild. Vos capacités sont améliorées.'),
(103, 20, 'Pics de glace', 'Vous projetez des pics de glace qui soignent les alliés, ou blessent les ennemis.'),
(104, 20, 'Art de la glace', 'En projetant vos pics de glace, vous vous soignez lorsque vous soignez un allié ou vous blessez un ennemi.'),
(105, 20, 'Aura d\'idole', 'Vous attachez une aura d\'idole à un allié. Le joueur allié portant une aura d\'idole se voit également être soigné lorsque Luna Snow soigne d\'autres alliés.'),
(106, 20, 'Froid absolu', 'Vous projetez une boule de glace qui gèle le premier ennemi touché tout en vous rendant de la santé.'),
(107, 20, 'Performance glacée', 'Vous montez sur la scène et vous vous mettez à danser ! Vous pouvez alterner entre deux performances, l\'une soigne les alliés proches, l\'autre leur accorde un bonus de dégâts.'),
(108, 21, 'Répulseurs/Unirayon', 'Vous tirez en avant à l\'aide de vos canons à nano pulsions./Vous projetez un unirayon.'),
(109, 21, 'Hyper vélocité', 'Activer le mode d\'hyper vélocité afin de voler vers l\'avant.'),
(110, 21, 'Surcharge de l\'armure', 'Activer le mode de surcharge de l\'armure, ce qui augmente les dégâts infligés par Répulseurs et Unirayon.'),
(111, 21, 'Barrage de micro missiles', 'Lorsque Hyper vélocité ou Surcharge de l\'armure est activé, Iron Man peut lancer un barrage de micro missiles.'),
(112, 21, 'Canon à pulsation invincible', 'Vous tirez un coup dévastateur de votre canon à pulsation, infligeant des dégâts massifs dans la zone ciblée à l\'impact.'),
(113, 22, 'Contrôle du chaos', 'Utilisez la magie du chaos afin d\'attaquer vos ennemis et de restaurer de l\'énergie du chaos.'),
(114, 22, 'Projection mystique', 'Utilisez l\'état de projection afin de voler librement. Réappuyez sur le bouton de la capacité afin d\'annuler la capacité.'),
(115, 22, 'Seau sombre', 'Vous projetez une orbe d\'énergie qui, au contact du premier ennemi touché ou de l\'environnement, génère un champ de force qui assomme périodiquement les ennemis en son sein. Vous pouvez exploser l\'orbe d\'énergie manuellement en appuyant sur la touche de la compétence.'),
(116, 22, 'Explosion chtonienne', 'Consommez de l\'énergie du chaos afin de projeter des missiles magiques qui infligent des dégâts aux ennemis.'),
(117, 22, 'Effacement de la réalité', 'Volez librement pendant que vous canalisez votre énergie, puis déchaînez-la et infligez des dégâts massifs.'),
(118, 22, 'Lien Chaotique', 'La Sorcière rouge peut imprégner Magnéto d\'énergie du chaos afin d\'enchanter son épée. Magnéto peut alors utiliser cette énergie pour frapper ses ennemis à moyenne distance.'),
(119, 23, 'Tentacules déchaînées', 'Déchaînez des tentacules vers l\'avant pour attaquer les ennemis.'),
(120, 23, 'Toile de balancement', 'Lancez une toile vers l\'avant, permettant un balancement unique dans la direction souhaitée.'),
(121, 23, 'Régénération symbiote', 'Générez un bonus de santé contre les dégâts. Plus la santé de Venom est basse, plus le bonus de santé généré est important.'),
(122, 23, 'Plongeon dévastateur', 'Foncez vers l\'emplacement ciblé depuis une certaine hauteur. À l\'atterrissage, infligez des dégâts aux ennemis à proximité, les repoussant vers le point d\'impact.'),
(123, 23, 'Emprise tentaculaire', 'Projetez des tentacules pour ralentir les ennemis à portée. Les ennemis incapables de se libérer à temps subissent des dégâts.'),
(124, 23, 'Prédateur souterrain', 'Creusez sous terre pour vous déplacer librement. Attendez un moment ou appuyez sur Q pour dévorer les ennemis à la surface et générer un bonus de santé.');

-- --------------------------------------------------------

--
-- Structure de la table `streamers`
--

CREATE TABLE `streamers` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` text NOT NULL,
  `link` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `streamers`
--

INSERT INTO `streamers` (`id`, `name`, `picture`, `link`, `createdAt`, `updatedAt`) VALUES
(1, 'MarvelRivalsfr', 'https://static-cdn.jtvnw.net/jtv_user_pictures/00409dc9-32e6-4917-8d73-109a8201f53e-profile_image-70x70.png', 'https://twitch.tv/MarvelRivalsfr', '2024-09-01 20:59:11', '2024-09-02 17:55:22'),
(2, 'IkerTTVV', 'https://static-cdn.jtvnw.net/jtv_user_pictures/ea21fba0-a2cd-4689-98cf-f32c2bfae266-profile_image-70x70.png', 'https://twitch.tv/IkerTTVV', '2024-09-01 20:59:51', '2024-09-01 20:59:51'),
(3, 'thelangam', 'https://static-cdn.jtvnw.net/jtv_user_pictures/a5f9c2f9-6430-41f5-90bc-8308419a9710-profile_image-70x70.png', 'https://twitch.tv/thelangam', '2024-09-01 21:00:13', '2024-09-01 21:00:13'),
(4, 'sanggo_tv', 'https://static-cdn.jtvnw.net/jtv_user_pictures/5d7a83aa-4f44-44a3-984e-24bb808cef1d-profile_image-70x70.png', 'https://www.twitch.tv/sanggo_tv', '2024-09-02 17:45:39', '2024-09-02 17:45:39');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rank` int NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `rank`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', 'admin@admin', 7, '2024-08-30 06:26:19', '2024-08-30 06:26:19'),
(2, 'user', 'user', 'user@user', 1, '2024-08-30 06:27:43', '2024-08-30 06:27:43'),
(3, 'dumsds', 'mdp', 'dms<bv<sdm', 1, '2024-09-02 17:56:37', '2024-09-02 17:56:37');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `heros`
--
ALTER TABLE `heros`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `passives`
--
ALTER TABLE `passives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hero_id` (`hero_id`);

--
-- Index pour la table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Index pour la table `spells`
--
ALTER TABLE `spells`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hero_id` (`hero_id`);

--
-- Index pour la table `streamers`
--
ALTER TABLE `streamers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `heros`
--
ALTER TABLE `heros`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `passives`
--
ALTER TABLE `passives`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `spells`
--
ALTER TABLE `spells`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT pour la table `streamers`
--
ALTER TABLE `streamers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `passives`
--
ALTER TABLE `passives`
  ADD CONSTRAINT `passives_ibfk_1` FOREIGN KEY (`hero_id`) REFERENCES `heros` (`id`);

--
-- Contraintes pour la table `spells`
--
ALTER TABLE `spells`
  ADD CONSTRAINT `spells_ibfk_1` FOREIGN KEY (`hero_id`) REFERENCES `heros` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
