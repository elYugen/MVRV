-- Insert hero data
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Spider-Man', '../../charfullbody/spiderman.png', '../charicon/Spider-Man.png', 'S+', 250, 5, 'dps', '2024-08-31 11:51:48', '2024-08-31 11:51:48');

-- Assuming the hero ID for Spider-Man is 1
-- Insert passive abilities
INSERT INTO passives (hero_id, name, description) VALUES
(1, 'Sens de l\'araignée', 'Vous êtes averti de la présence d\'un ennemi.'),
(1, 'Grimpeur de mur', 'Appuyez sur la touche de saut afin de grimper sur les surfaces verticales et appuyez sur le bouton d\'attaque principale afin de courir dessus.');

-- Insert spells
INSERT INTO spells (hero_id, name, description) VALUES
(1, 'Frappe du traceur', 'Vous frappez devant vous, et vous infligez des dégâts supplémentaires aux ennemis affligés par un Spider-traceur.'),
(1, 'Balancement', 'Vous tirez une toile afin de vous balancer.'),
(1, 'Toile de rapprochement', 'Vous tirez une toile afin de rapprocher l\'ennemi touché vers vous. Si cet ennemi est affligé par un Spider-traceur, c\'est Spider-Man qui se rapprochera vers l\'ennemi touché.'),
(1, 'Projection aérienne', 'Vous projetez les ennemis en l\'air, les ennemis affligés par un Spider-traceur subissent des dégâts supplémentaires.'),
(1, 'Tir de Spider-traceur', 'Vous tirez une toile qui inflige des dégâts et afflige les ennemis touchés d\'un Spider-traceur.'),
(1, 'Explosion de toile', 'Vous provoquez une explosion de toile tout autour de vous, ce qui inflige des dégâts aux ennemis tout en les assommant.');

-- Insertion des données pour Magneto
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Magneto', '../../charfullbody/magneto.png', '../charicon/Magneto.png', 'A+', 650, 2, 'tank', '2024-08-31 12:02:24', '2024-08-31 12:02:24');

SET @magneto_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@magneto_id, 'Descente magnétique', 'Maintenez la touche de saut afin de tomber lentement.');

INSERT INTO spells (hero_id, name, description) VALUES
(@magneto_id, 'Orbes magnétiques', 'Vous tirez une volée d''orbes magnétiques devant vous.'),
(@magneto_id, 'Rideau métallique', 'Vous manipulez le champ magnétique afin de former un rideau métallique qui bloque tous les projectiles.'),
(@magneto_id, 'Bouclier en métal', 'Vous générez un bouclier en métal et l''appliquez sur un allié ciblé. Les dégâts absorbés par le bouclier sont convertis en anneaux qui se trouvent au dos de Magnéto.'),
(@magneto_id, 'Canon magnétique', 'Vous convertissez les anneaux de fer qui se trouvent au dos de Magnéto en un canon magnétique et vous projetez une masse métallique devant vous. Les dégâts de cette capacité augmentent avec le nombre d''anneaux accumulés, et repoussent l''ennemi touché si cette capacité a été pleinement chargée.'),
(@magneto_id, 'Météore de fer', 'Vous manipulez le champ magnétique afin d''y attirer la matière et des projectiles afin de créer un météore de fer gigantesque qui inflige des dégâts massifs dans la zone ciblée à l''impact.');


-- Insertion des données pour Thor
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Thor', '../../charfullbody/thor.png', '../charicon/Thor.png', 'B', 600, 2, 'Tank', '2024-08-31 17:24:44', '2024-08-31 17:24:44');

SET @thor_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@thor_id, 'Thorforce', 'Après avoir utilisé une compétence, lancer Mjolnir Bash accorde un point de Thorforce.');

INSERT INTO spells (hero_id, name, description) VALUES
(@thor_id, 'Mjolnir Bash', 'Manier Mjolnir pour frapper un ennemi. Quand il est éveillé, Thor peut lancer des vagues d''arc de foudre pour faire des dégâts.'),
(@thor_id, 'Lancer de Mjolnir', 'Lance Mjolnir en avant qui revient après un court instant.'),
(@thor_id, 'Tourbillon de Mjolnir', 'Maintiens pour faire tourner Mjolnir avant de s''élancer en avant et repousser les ennemis.'),
(@thor_id, 'Invocation d''éclairs', 'Invoque des éclairs pour restaurer la Thorforce basé sur le nombre d''ennemis touchés. Ralentit les ennemis.'),
(@thor_id, 'Éveil divin', 'Consomme toute la Thorforce pour entrer dans l''état éveillé, octroyant de la vie supplémentaire et améliorant Mjolnir Bash.'),
(@thor_id, 'Frappe du dieu de la foudre', 'Dieu de la foudre Thor s''envole et frappe le sol après la durée de la charge.');

-- Insertion des données pour Peni Parker
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Peni Parker', '../../charfullbody/penniparker.png', '../charicon/pennyparker.png', 'B', 600, 3, 'Tank', '2024-08-31 17:25:01', '2024-08-31 17:25:01');

SET @peni_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@peni_id, 'Grimpeuse de mur', 'Appuyez sur la touche de saut afin de grimper sur les surfaces verticales.');

INSERT INTO spells (hero_id, name, description) VALUES
(@peni_id, 'Cyber-toile', 'Vous projetez une cyber-toile.'),
(@peni_id, 'Spider-nid', 'Vous générez un Spider-nid sur une zone ciblée. Le Spider-nid générera alors des Spider-drones et créera une Cyber-toile.'),
(@peni_id, 'Arachno-mines', 'Vous déployez des Arachno-mines qui peuvent être cachées au sein d''une Cyber-toile.'),
(@peni_id, 'Ficelle de toile', 'Vous tirez une ficelle de toile qui se lie à une zone ciblée ou à une Cyber-toile. Si la ficelle de toile est trop étirée, elle causera un rappel.'),
(@peni_id, 'Toile futuriste', 'Vous tirez une toile futuriste qui immobilise l''ennemi touché. Cette capacité génère une Cyber-toile si elle frappe l''environnement.'),
(@peni_id, 'Amélioration SP//dr', 'Vous améliorez l''armure SP//dr. Vous repoussez les ennemis se trouvant sur votre chemin tout en déployant périodiquement des Arachno-mines, des Spider-drones et des Cyber-toiles.');

-- Insertion des données pour Star-Lord
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Star-Lord', '../../charfullbody/starlord.png', '../charicon/Starlord.png', 'B', 250, 2, 'Dps', '2024-08-31 17:25:07', '2024-08-31 17:25:07');

SET @starlord_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@starlord_id, 'Null', 'Null');

INSERT INTO spells (hero_id, name, description) VALUES
(@starlord_id, 'Flingues élémentaires', 'Vous tirez vers les ennemis avec vos deux flingues élémentaires.'),
(@starlord_id, 'Propulsion', 'Vous vous déplacez plus rapidement à l''aide de vos propulseurs.'),
(@starlord_id, 'Tir frénétique', 'Vous tirez frénétiquement, infligeant des dégâts aux ennemis à portée.'),
(@starlord_id, 'Esquive et recharge', 'Vous esquivez vers la direction où vous vous dirigiez, et vous rechargez vos flingues.'),
(@starlord_id, 'Vol libre', 'Vous volez librement et vous visez automatiquement les ennemis en vue.');

-- Insertion des données pour Adam Warlock
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Adam Warlock', '../../charfullbody/adamwarlock.png', '../charicon/Adam.png', 'A', 250, 2, 'Heal', '2024-08-31 17:29:34', '2024-08-31 17:29:34');

SET @adamwarlock_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@adamwarlock_id, 'Cocon régénératif', 'Une fois que son corps a été détruit, Adam peut librement bouger en tant qu''âme et reconstruire son corps à un endroit choisi.');

INSERT INTO spells (hero_id, name, description) VALUES
(@adamwarlock_id, 'Énergie quantique', 'Lance de l''énergie quantique pour faire des dégâts.'),
(@adamwarlock_id, 'Explosion quantique', 'Rassemble de l''énergie quantique durant un temps et la relâche sur les ennemis.'),
(@adamwarlock_id, 'Liens d''âmes', 'Unit l''âme des alliés sous forme de liens, octroyant du soin sur la durée et répartissant les dégâts le long du lien.'),
(@adamwarlock_id, 'Flux vital', 'Cible un allié avec un flux d''énergie vitale rebondissant qui le soigne aussi au moment du lancement. Lance la compétence sur lui-même s''il ne cible personne.'),
(@adamwarlock_id, 'Éveil karmique', 'Éveille le karma des alliés pour les ressusciter. Les alliés ressuscités n''ont pas beaucoup de vie mais bénéficient d''une courte période d''invincibilité.');

-- Insertion des données pour Jeff The Land Shark
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Jeff The Land Shark', '../../charfullbody/jeff.png', '../charicon/Jeff.png', 'B', 250, 2, 'Heal', '2024-08-31 17:34:57', '2024-08-31 17:34:57');

SET @jeff_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@jeff_id, 'Gentillesse inconsciente', 'Réduit les dégâts provenant des coups critiques.');

INSERT INTO spells (hero_id, name, description) VALUES
(@jeff_id, 'Joyeuse éclaboussure', 'Jeff expulse un jet de soin/Éclaboussure d''eau Il lance une sphère d''eau rapide qui explose à l''impact, blessant les ennemis.'),
(@jeff_id, 'Cache-Cache', 'Jeff plonge dans le sol, exposant seulement sa nageoire dorsale, ce qui lui octroie une vitesse supplémentaire et lui permet de grimper les murs.'),
(@jeff_id, 'Bulle de soin', 'Crache une bulle qui soigne l''allié qui la collecte et augmente tous les soins reçus par cet allié.'),
(@jeff_id, 'C''est Jeff!', 'Jeff plonge dans le sol et refait surface pour avaler ennemis et alliés dans une large zone, activant Cache-Cache pour une courte durée avant de les éjecter.');

-- Insertion des données pour Bruce Banner/Hulk
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Bruce Banner/Hulk', '../../charfullbody/hulk.png', '../charicon/hulk.png', 'A+', 900, 4, 'Tank', '2024-08-31 17:36:32', '2024-08-31 17:36:32');

SET @hulk_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@hulk_id, 'Bond incroyable', 'Maintenez la touche de saut afin de faire un saut chargé qui permet à Hulk (Héros) d''amener au sol un ennemi se trouvant en l''air.');

INSERT INTO spells (hero_id, name, description) VALUES
(@hulk_id, 'Coup puissant', 'Vous frappez les ennemis qui se trouvent en face de vous.'),
(@hulk_id, 'Garde indestructible', 'Vous et vos alliés proches gagnez un bouclier gamma qui absorbe les dégâts, ces dégâts absorbés sont ensuite convertis en énergie pour HULK ÉCRASE !'),
(@hulk_id, 'Confinement radioactif', 'Vous envoyez de l''énergie gamma qui place l''ennemi touché dans un vide quantique qui l''immobilise et l''immunise aux effets de toutes les capacités pendant la durée de cette capacité.'),
(@hulk_id, 'Rafale de gamma', 'Vous envoyez une rafale de rayon gamma qui inflige des dégâts.'),
(@hulk_id, 'HULK ÉCRASE !', 'Vous déchaînez l''énergie gamma emmagasinée en vous. Hulk se transforme et devient monstrueux pour une courte durée.');

-- Insertion des données pour Namor
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Namor', '../../charfullbody/namor.png', '../charicon/Namor.png', 'B', 250, 2, 'Dps', '2024-08-31 17:39:14', '2024-08-31 17:39:14');

SET @namor_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@namor_id, 'Aucun', 'Aucune capacité passive définie pour ce personnage.');

INSERT INTO spells (hero_id, name, description) VALUES
(@namor_id, 'Lancer de trident', 'Vous lancez le trident devant vous, qui lorsque vous touchez un ennemi réduit le temps de recharge de Domination aquatique.'),
(@namor_id, 'Barrière volante', 'Vous conjurez une barrière qui vous protège pendant que vous volez.'),
(@namor_id, 'Invocation d''engeance', 'Vous invoquez une engeance monstrueuse qui attaque automatiquement les ennemis.'),
(@namor_id, 'Ordre d''attaque', 'Vous lancez le trident afin de frapper un ennemi proche. Si vous touchez un ennemi, vous ordonnez à toutes les engeances monstrueuses d''attaquer cet ennemi.'),
(@namor_id, 'Invocation de Giganto', 'Vous invoquez Giganto afin d''écraser les ennemis se trouvant dans une zone ciblée.');

-- Insertion des données pour Punisher
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Punisher', '../../charfullbody/punisher.png', '../charicon/punisher.png', 'S+', 300, 1, 'Dps', '2024-08-31 17:43:36', '2024-08-31 17:43:36');

SET @punisher_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@punisher_id, 'Regard du guerrier', 'Vous pouvez voir pour une courte durée les ennemis qui quittent votre vision.');

INSERT INTO spells (hero_id, name, description) VALUES
(@punisher_id, 'Arsenal double', 'Vous tirez sur les ennemis à l''aide de votre fusil automatique, Adjudication./Vous tirez sur les ennemis à l''aide de votre fusil à pompe, Délivrance.'),
(@punisher_id, 'Câble de déplacement', 'Vous lancez un câble qui permet au Punisher de se déplacer rapidement.'),
(@punisher_id, 'Tourelle de Suppression', 'Déploie une Tourelle de Suppression qui immobilise le Punisher tout en infligeant des dégâts massifs.'),
(@punisher_id, 'Grenade fumigène', 'Vous lancez une grenade fumigène qui obscurcit la vision des ennemis.'),
(@punisher_id, 'Déchaînement de feu', 'Vous déchaînez deux canons rotatifs et tirez des missiles afin d''abattre vos ennemis.');


-- Insertion des données pour Storm
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Storm', '../../charfullbody/storm.png', '../charicon/storm.png', 'A', 250, 3, 'Dps', '2024-08-31 17:44:18', '2024-08-31 17:44:18');

SET @storm_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@storm_id, 'Null', 'Null');

INSERT INTO spells (hero_id, name, description) VALUES
(@storm_id, 'Lames de vent', 'Vous lancez des lames de vent.'),
(@storm_id, 'Changement météo', 'Vous changez la météo et octroyez un bonus aux alliés proches. Tempête pour accorder un bonus de vitesse de déplacement; Tonnerre afin d''accorder un bonus de dégâts.'),
(@storm_id, 'Canalisation météorologique', 'Vous canalisez le pouvoir de la météo afin d''amplifier les pouvoirs de Tornade. Tempête afin de lui accorder un bonus de vitesse de déplacement; Tonnerre afin de lui accorder un bonus de dégâts et lui permet d''invoquer des frappes de tonnerre qui infligent des dégâts aux adversaires.'),
(@storm_id, 'Frappe de foudre', 'Vous déchaînez une frappe de foudre.'),
(@storm_id, 'Ouragan', 'Vous vous transformez en un ouragan qui aspire les ennemis proches et leur inflige des dégâts.');

-- Insertion des données pour Loki
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Loki', '../../charfullbody/loki.png', '../charicon/loki.png', 'A+', 250, 4, 'Heal', '2024-08-31 17:44:53', '2024-08-31 17:44:53');

SET @loki_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@loki_id, 'Null', 'Null');

INSERT INTO spells (hero_id, name, description) VALUES
(@loki_id, 'Missiles mystiques', 'Vous tirez des missiles mystiques pour soit soigner vos alliés, soit pour frapper vos ennemis.'),
(@loki_id, 'Champ de runes', 'Utilisez des pierres de runes afin de créer un champ magique qui convertit les dégâts subis par les alliés se trouvant au sein de ce cercle en énergie de soin.'),
(@loki_id, 'Projection illusoire', 'Vous projetez un double illusoire qui permet de lancer certaines capacités de Loki.'),
(@loki_id, 'Permutation', 'Vous échangez de place avec un double illusoire ciblé.'),
(@loki_id, 'Coup de poignard', 'Vous assenez un coup de poignard à un ennemi proche, vous infligez des dégâts supplémentaires si vous l''attaquez par derrière.'),
(@loki_id, 'Discorde invisible', 'Vous devenez invisible et invoquez un double illusoire afin de mener vos ennemis en discorde.'),
(@loki_id, 'Métamorphose', 'Vous vous transformez en un allié ou un ennemi ciblé, ce qui vous permet d''utiliser leurs capacités.');

-- Insertion des données pour Doctor Strange
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Doctor Strange', '../../charfullbody/strange.png', '../charicon/Strange.png', 'A', 650, 3, 'Tank', '2024-08-31 17:45:31', '2024-08-31 17:45:31');

SET @strange_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@strange_id, 'Le prix de la magie', 'De la magie noire s''accumule lorsque vous infligez des dégâts à un ennemi. Si vous ne libérez pas cette magie noire, Docteur Strange subira un effet d''anti-soin.');

INSERT INTO spells (hero_id, name, description) VALUES
(@strange_id, 'Dagues de Denak', 'Vous projetez des dagues de Denak.'),
(@strange_id, 'Lévitation mystique', 'Vous prenez de l''altitude puis vous volez pour une courte durée.'),
(@strange_id, 'Déchaînement obscur', 'Vous déchaînez de la magie noire qui inflige des dégâts aux ennemis proches.'),
(@strange_id, 'Portail dimensionnel', 'Vous ouvrez un portail entre deux lieux qui peut être emprunté par tous les personnages.'),
(@strange_id, 'Barrière mystique', 'Vous créez une barrière qui absorbe les dégâts.'),
(@strange_id, 'Extraction de l''âme', 'Vous arrachez l''âme de vos ennemis de leur corps, ce qui les assomme pour la période de la compétence. Les dégâts infligés à l''âme de votre adversaire sont directement transmis au corps physique de ce dernier.');


-- Insertion des données pour Mantis
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Mantis', '../../charfullbody/mantis.png', '../charicon/Mantis.png', 'A', 250, 1, 'Heal', '2024-08-31 17:53:26', '2024-08-31 17:53:26');

SET @mantis_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@mantis_id, 'Faveur de la nature', 'Vous recevez un bonus de vitesse de déplacement tant que vous n''êtes pas blessé et que vous soignez en consumant des orbes de vie.');

INSERT INTO spells (hero_id, name, description) VALUES
(@mantis_id, 'Ronce vitale', 'Vous tirez une ronce d''énergie vitale, et vous gagnez une orbe de vie si vous effectuez un coup critique.'),
(@mantis_id, 'Spore soporifique', 'Vous projetez une spore qui endort l''ennemi le plus proche.'),
(@mantis_id, 'Transfert de puissance', 'Vous consumez une orbe de vie afin de donner à un allié un bonus de dégâts.'),
(@mantis_id, 'Absorption de puissance', 'Vous consumez une orbe de vie afin de vous donner un bonus de dégâts.'),
(@mantis_id, 'Soin régénérant', 'Vous consumez une orbe de vie afin de donner du soin régulier à un allié.'),
(@mantis_id, 'Aura de vitalité', 'Vous libérez de l''énergie vitale autour de vous. Vous accordez du soin régulier ainsi qu''un bonus de vitesse de déplacement aux alliés adjacents.');

-- Insertion des données pour Rocket Raccoon
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Rocket Raccoon', '../../charfullbody/raccoon.png', '../charicon/RocketRacoon.png', 'S+', 250, 1, 'Heal', '2024-08-31 17:53:48', '2024-08-31 17:53:48');

SET @rocket_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@rocket_id, 'Escalade sauvage', 'Maintenez la touche de saut afin d''escalader un mur.'),
(@rocket_id, 'As du vol', 'Maintenez la touche de saut afin de descendre lentement.');

INSERT INTO spells (hero_id, name, description) VALUES
(@rocket_id, 'Tir double', 'Vous tirez des projectiles qui infligent des dégâts./Vous tirez des orbes rebondissantes qui soignent les alliés.'),
(@rocket_id, 'Propulsion de jetpack', 'Vous vous propulsez vers l''avant.'),
(@rocket_id, 'Tour de retour au combat', 'Vous déployez une tour de retour au combat qui réanime un allié vaincu et qui produit périodiquement des packs d''armure et des charges de Propulsion de jetpack pour Rocket Raccoon.'),
(@rocket_id, 'Amplificateur de puissance', 'Vous déployez un amplificateur de puissance qui accorde un bonus de dégâts aux personnages alliés proches.');


-- Insertion des données pour Hela
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Hela', '../../charfullbody/hela.png', '../charicon/Hera.png', 'A+', 250, 3, 'Dps', '2024-08-31 17:54:52', '2024-08-31 17:54:52');

SET @hela_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@hela_id, 'Tempête de corbeaux de Nastrond', 'Un corbeau de Nastrond apparaîtra là où vous avez vaincu un ennemi. Celui-ci explose peu de temps après./Maintenez la touche de saut afin de tomber lentement.');

INSERT INTO spells (hero_id, name, description) VALUES
(@hela_id, 'Ronces de l''épée de nuit', 'Vous projetez des ronces de l''épée de nuit.'),
(@hela_id, 'Nuée de corbeaux', 'Vous vous transformez en une nuée de corbeaux de Hel et volez. Réappuyez sur la touche de la compétence afin de revenir à votre forme normale.'),
(@hela_id, 'Sphère de Hel', 'Vous projetez une sphère de Hel qui explose, assommant tous les ennemis proches.'),
(@hela_id, 'Explosion de ronces', 'Vous projetez de multiples ronces de l''épée de nuit qui explosent peu de temps après.'),
(@hela_id, 'Pluie de corbeaux', 'Vous vous envolez jusqu''au ciel afin de projeter des corbeaux de Nastrond à volonté.');

-- Insertion des données pour Black Panther
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Black Panther', '../../charfullbody/blackpanther.png', '../charicon/Black-Panthere.png', 'A', 300, 4, 'Dps', '2024-08-31 17:55:09', '2024-08-31 17:55:09');

SET @blackpanther_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@blackpanther_id, 'Ruse de la Panthère', 'Inflige plus de dégâts lorsque la santé est basse.'),
(@blackpanther_id, 'Pas Subtil', 'Maintenez Espace pour courir sur un mur ; effectuez un saut après vous être détaché du mur.');

INSERT INTO spells (hero_id, name, description) VALUES
(@blackpanther_id, 'Griffes en Vibranium', 'Frappe avec les griffes en Vibranium vers l''avant.'),
(@blackpanther_id, 'Bond du félin', 'S''élance en avant et inflige des dégâts aux ennemis. Toucher un ennemi affecté par une Marque de Vibranium produit un bonus de santé et réinitialise la capacité. Gagne 50 de bouclier si des ennemis sont touchés.'),
(@blackpanther_id, 'Tourbillon de Vibranium', 'Tournoie vers l''avant et applique une Marque de Vibranium aux ennemis touchés.'),
(@blackpanther_id, 'Lance d''énergie', 'Lance une lance d''énergie en Vibranium vers l''avant, créant un Champ de Force en Vibranium et appliquant une Marque de Vibranium aux ennemis dans son rayon.'),
(@blackpanther_id, 'Invocation de Bast', 'Invoque Bast pour bondir en avant, infligeant des dégâts.');

-- Insertion des données pour Groot
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Groot', '../../charfullbody/groot.png', '../charicon/Groot.png', 'A', 900, 1, 'Tank', '2024-08-31 17:55:33', '2024-08-31 17:55:33');

SET @groot_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@groot_id, 'Colosse floral', 'Les murs de bois se trouvant près de Groot s''éveillent, ce qui active leurs effets supplémentaires.');

INSERT INTO spells (hero_id, name, description) VALUES
(@groot_id, 'Lianes attaquantes', 'Vous lancez des lianes pour attaquer vos ennemis.'),
(@groot_id, 'Mur lacéronce', 'Vous ciblez une zone et vous y faites pousser un mur lacéronce. Lorsqu''éveillé, le mur frappera les ennemis proches qui sont attaqués par Groot et ses alliés.'),
(@groot_id, 'Mur bois-de-fer', 'Vous ciblez une zone et vous y faites pousser un mur bois-de-fer. Lorsqu''éveillé, le mur vous accorde de la vie supplémentaire lorsque des ennemis proches subissent des dégâts.'),
(@groot_id, 'Bombe de spores', 'Vous lancez une bombe de spore explosive qui se scinde en plusieurs petites explosions de spores.'),
(@groot_id, 'Emprisonnement végétal', 'Vous lancez une massive grappe de lianes qui amène les ennemis en son centre et les emprisonne.');

-- Insertion des données pour Magik
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Magik', '../../charfullbody/magik.png', '../charicon/Magic.png', 'A', 250, 3, 'Dps', '2024-08-31 17:56:42', '2024-08-31 17:56:42');

SET @magik_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@magik_id, 'Puissance des Limbes', 'Les dégâts que vous infligez sont convertis en vie supplémentaire.');

INSERT INTO spells (hero_id, name, description) VALUES
(@magik_id, 'Épée de l''âme', 'Vous frappez devant vous avec l''épée de l''âme.'),
(@magik_id, 'Disque à pas', 'Vous sautez à travers un disque à pas, ce qui vous téléporte un peu plus loin selon votre déplacement.'),
(@magik_id, 'Ruée démoniaque', 'Vous vous ruez en avant, puis vous projetez un ennemi en l''air.'),
(@magik_id, 'Tourbillon de l''âme', 'En sortant d''un disque à pas, vous pouvez faire tournoyer votre épée de l''âme.'),
(@magik_id, 'Frappe tranchante', 'Vous frappez avec une attaque tranchante à distance.'),
(@magik_id, 'Invocation des Limbes', 'En sortant d''un disque à pas, vous pouvez invoquer un démon des Limbes qui attaque les ennemis.'),
(@magik_id, 'Transformation Darkchild', 'Vous vous transformez en Darkchild. Vos capacités sont améliorées.');

-- Insertion des données pour Luna Snow
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Luna Snow', '../../charfullbody/lunasnow.png', '../charicon/Lady-Frost.png', 'A', 400, 3, 'Heal', '2024-08-31 17:57:14', '2024-08-31 17:57:14');

SET @lunasnow_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@lunasnow_id, 'Patineuse élégante', 'Vous vous rendez automatiquement de la santé lorsque vous utilisez Art de la glace ou Froid absolu./Lorsque vous avancez, vous vous mettez à patiner.');

INSERT INTO spells (hero_id, name, description) VALUES
(@lunasnow_id, 'Pics de glace', 'Vous projetez des pics de glace qui soignent les alliés, ou blessent les ennemis.'),
(@lunasnow_id, 'Art de la glace', 'En projetant vos pics de glace, vous vous soignez lorsque vous soignez un allié ou vous blessez un ennemi.'),
(@lunasnow_id, 'Aura d''idole', 'Vous attachez une aura d''idole à un allié. Le joueur allié portant une aura d''idole se voit également être soigné lorsque Luna Snow soigne d''autres alliés.'),
(@lunasnow_id, 'Froid absolu', 'Vous projetez une boule de glace qui gèle le premier ennemi touché tout en vous rendant de la santé.'),
(@lunasnow_id, 'Performance glacée', 'Vous montez sur la scène et vous vous mettez à danser ! Vous pouvez alterner entre deux performances, l''une soigne les alliés proches, l''autre leur accorde un bonus de dégâts.');

-- Insertion des données pour Iron Man
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt) VALUES
('Iron Man', '../../charfullbody/ironman.png', '../charicon/IronMan.png', 'A', 250, 2, 'Dps', '2024-08-31 17:57:42', '2024-08-31 17:57:42');

SET @ironman_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description) VALUES
(@ironman_id, 'Null', 'Null');

INSERT INTO spells (hero_id, name, description) VALUES
(@ironman_id, 'Répulseurs/Unirayon', 'Vous tirez en avant à l''aide de vos canons à nano pulsions./Vous projetez un unirayon.'),
(@ironman_id, 'Hyper vélocité', 'Activer le mode d''hyper vélocité afin de voler vers l''avant.'),
(@ironman_id, 'Surcharge de l''armure', 'Activer le mode de surcharge de l''armure, ce qui augmente les dégâts infligés par Répulseurs et Unirayon.'),
(@ironman_id, 'Barrage de micro missiles', 'Lorsque Hyper vélocité ou Surcharge de l''armure est activé, Iron Man peut lancer un barrage de micro missiles.'),
(@ironman_id, 'Canon à pulsation invincible', 'Vous tirez un coup dévastateur de votre canon à pulsation, infligeant des dégâts massifs dans la zone ciblée à l''impact.');

-- Insertion des données pour la Sorcière Rouge
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt)
VALUES ('Sorcière Rouge', '../../charfullbody/scarlet.png', '../charicon/Wanda.png', 'C', 250, 1, 'Dps', '2024-08-31 17:58:17', '2024-08-31 17:58:17');

SET @scarlet_witch_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description)
VALUES (@scarlet_witch_id, 'Télékinésie', 'Maintenez la touche de saut afin de tomber lentement.');

INSERT INTO spells (hero_id, name, description)
VALUES 
(@scarlet_witch_id, 'Contrôle du chaos', 'Utilisez la magie du chaos afin d''attaquer vos ennemis et de restaurer de l''énergie du chaos.'),
(@scarlet_witch_id, 'Projection mystique', 'Utilisez l''état de projection afin de voler librement. Réappuyez sur le bouton de la capacité afin d''annuler la capacité.'),
(@scarlet_witch_id, 'Seau sombre', 'Vous projetez une orbe d''énergie qui, au contact du premier ennemi touché ou de l''environnement, génère un champ de force qui assomme périodiquement les ennemis en son sein. Vous pouvez exploser l''orbe d''énergie manuellement en appuyant sur la touche de la compétence.'),
(@scarlet_witch_id, 'Explosion chtonienne', 'Consommez de l''énergie du chaos afin de projeter des missiles magiques qui infligent des dégâts aux ennemis.'),
(@scarlet_witch_id, 'Effacement de la réalité', 'Volez librement pendant que vous canalisez votre énergie, puis déchaînez-la et infligez des dégâts massifs.'),
(@scarlet_witch_id, 'Lien Chaotique', 'La Sorcière rouge peut imprégner Magnéto d''énergie du chaos afin d''enchanter son épée. Magnéto peut alors utiliser cette énergie pour frapper ses ennemis à moyenne distance.');

-- Insertion des données pour Venom
INSERT INTO heros (name, sprite, icon, tier, health, difficulty, category, createdAt, updatedAt)
VALUES ('Venom', '../../charfullbody/venom.png', '../charicon/Venom.png', 'S+', 800, 3, 'Tank', '2024-08-31 17:58:33', '2024-08-31 17:58:33');

SET @venom_id = LAST_INSERT_ID();

INSERT INTO passives (hero_id, name, description)
VALUES (@venom_id, 'Biologie Extraterrestre', 'Appuyez sur Espace pour grimper aux murs et, tout en grimpant, appuyez sur le clic gauche pour sprinter.');

INSERT INTO spells (hero_id, name, description)
VALUES 
(@venom_id, 'Tentacules déchaînées', 'Déchaînez des tentacules vers l''avant pour attaquer les ennemis.'),
(@venom_id, 'Toile de balancement', 'Lancez une toile vers l''avant, permettant un balancement unique dans la direction souhaitée.'),
(@venom_id, 'Régénération symbiote', 'Générez un bonus de santé contre les dégâts. Plus la santé de Venom est basse, plus le bonus de santé généré est important.'),
(@venom_id, 'Plongeon dévastateur', 'Foncez vers l''emplacement ciblé depuis une certaine hauteur. À l''atterrissage, infligez des dégâts aux ennemis à proximité, les repoussant vers le point d''impact.'),
(@venom_id, 'Emprise tentaculaire', 'Projetez des tentacules pour ralentir les ennemis à portée. Les ennemis incapables de se libérer à temps subissent des dégâts.'),
(@venom_id, 'Prédateur souterrain', 'Creusez sous terre pour vous déplacer librement. Attendez un moment ou appuyez sur Q pour dévorer les ennemis à la surface et générer un bonus de santé.');