const chara = [
  {
      name: "Spider-Man",
      sprite: "./charfullbody/img_heroportrait_1036_fullbody.png",
      health: "250",
      difficulty: "5",
      category: "Dps",
      passivename: ["Sens de l'araignée","Grimpeur de mur"],
      passive:[
        {
          "Sens de l'araignée":"Vous êtes averti de la présence d'un ennemi.",
          "Grimpeur de mur":" Appuyez sur la touche de saut afin de grimper sur les surfaces verticales et appuyez sur le bouton d'attaque principale afin de courir dessus."
        }
      ],
      spellsname: ["Frappe du traceur", "Balancement", "Toile de rapprochement", "Projection aérienne", "Tir de Spider-traceur", "Explosion de toile"],
      spells: [
        {
          "Frappe du traceur": "Vous frappez devant vous, et vous infligez des dégâts supplémentaires aux ennemis affligés par un Spider-traceur.",
          "Balancement": "Vous tirez une toile afin de vous balancer",
          "Toile de rapprochement": "Vous tirez une toile afin de rapprocher l'ennemi touché vers vous. Si cet ennemi est affligé par un Spider-traceur, c'est Spider-Man qui se rapprochera vers l'ennemi touché.",
          "Projection aérienne": "Vous projetez les ennemis en l'air, les ennemis affligés par un Spider-traceur subissent des dégâts supplémentaires.",
          "Tir de Spider-traceur": "Vous tirez une toile qui inflige des dégâts et afflige les ennemis touchés d'un Spider-traceur.",
          "Explosion de toile": "Vous provoquez une explosion de toile tout autour de vous, ce qui inflige des dégâts aux ennemis tout en les assommant."
        }
      ]
  },
      {
          "cdspell": [
            {
              "Spider-pouvoir": "Munitions Infini",
              "Balancement": "CD 0sec",
              "Viens par là !": "CD 8sec",
              "Combo incroyable": "CD 2sec",
              "Lance-toiles": "Stack 5/recharge 3sec",
              "Tournoiement spectaculaire": "Recharge"
            }
          ]
        },
        {
          name: "Magneto",
          sprite: "./charfullbody/img_heroportrait_1037_fullbody.png",
          health: "650",
          difficulty: "2",
          category: "Tank",
          passivename: "Descente magnétique",
          passive:[{"Descente magnétique":"Maintenez la touche de saut afin de tomber lentement."}], 
          spellsname: ["Orbes magnétiques", "Rideau métallique", "Bouclier en métal", "Canon magnétique", "Météore de fer"],
          spells: [
            {
              "Orbes magnétiques": "Vous tirez une volée d'orbes magnétiques devant vous.",
              "Rideau métallique": "Vous manipulez le champ magnétique afin de former un rideau métallique qui bloque tous les projectiles.",
              "Bouclier en métal": "Vous générez un bouclier en métal et l'appliquez sur un allié ciblé. Les dégâts absorbés par le bouclier sont convertis en anneaux qui se trouvent au dos de Magnéto.",
              "Canon magnétique": "Vous convertissez les anneaux de fer qui se trouvent au dos de Magnéto en un canon magnétique et vous projetez une masse métallique devant vous. Les dégâts de cette capacité augmentent avec le nombre d'anneaux accumulés, et repoussent l'ennemi touché si cette capacité a été pleinement chargée.",
              "Météore de fer": "Vous manipulez le champ magnétique afin d'y attirer la matière et des projectiles afin de créer un météore de fer gigantesque qui inflige des dégâts massifs dans la zone ciblée à l'impact."
            }
          ]
      },
          {
              "cdspell": [
                {
                  "Volée de fer": "10 munitions",
                  "Rideau de fer": "CD 12sec",
                  "Bouclier de métal": "CD 8sec",
                  "Canon magnétique": "CD 6sec/stack + compétences à charger jusqu'a 3 stack",
                  "Météore M": "recharge",
                  "Fusion métallique": "CD 30sec"
                }
              ]
            },
        {
          name: "Thor",
          sprite: "./charfullbody/img_heroportrait_1039_fullbody.png",
          health: "600",
          difficulty: "2",
          category: "Tank",
          passivename: "Thorforce",
          passive: [{"Thorforce":"Après avoir utilisé une compétence, lancer Mjolnir Bash accorde un point de Thorforce."}],
          spellsname: ["Mjolnir Bash", "Lancer de Mjolnir", "Tourbillon de Mjolnir", "Invocation d'éclairs", "Éveil divin", "Frappe du dieu de la foudre"],
          spells: [
            {
              "Mjolnir Bash": "Manier Mjolnir pour frapper un ennemi. Quand il est éveillé, Thor peut lancer des vagues d'arc de foudre pour faire des dégâts.",
              "Lancer de Mjolnir": "Lance Mjolnir en avant qui revient après un court instant.",
              "Tourbillon de Mjolnir": "Maintiens pour faire tourner Mjolnir avant de s'élancer en avant et repousser les ennemis.",
              "Invocation d'éclairs": "Invoque des éclairs pour restaurer la Thorforce basé sur le nombre d'ennemis touchés. Ralentit les ennemis.",
              "Éveil divin": "Consomme toute la Thorforce pour entrer dans l'état éveillé, octroyant de la vie supplémentaire et améliorant Mjolnir Bash.",
              "Frappe du dieu de la foudre": "Dieu de la foudre Thor s'envole et frappe le sol après la durée de la charge"
            }
          ],
          cdspell: [
              {
                  "Mjolnir Bash": "CD 0sec",
                  "Lancer de marteau": "CD 2sec",
                  "Onde de tempête": "CD 2sec",
                  "Royaume de foudre": "CD 12sec",
                  "Rune d'éveil": "CD 2sec",
                  "Dieu de la foudre": "recharge"
                }
          ]
        },
  {
      name: "Winter Soldier",
      sprite: "./charfullbody/img_heroportrait_1041_fullbody.png",
      health: "250",
      difficulty: "2",
      category: "Dps",
      passivename: "Charge incessante",
      passive: [{"Charge incessante":"Roterstern se recharge automatiquement pendant que le bras bionique est actif, octroyant au Winter Soldier des points de vie bonus."}],
      spellsname: ["Balles explosives", "Coup de poing électronique", "Charge et projection", "Crochet bionique", "Impact dévastateur"],
      spells: [
        {
          "Balles explosives": "Le Winter Soldier tire des balles explosives avec son blaster Roterstern, infligeant des dégâts à la cible principale et aux ennemis situés derrière.",
          "Coup de poing électronique": "Il charge et lance un puissant coup de poing électronique avec son bras bionique, causant des dégâts et ralentissant les ennemis touchés.",
          "Charge et projection": "Le Winter Soldier se précipite en avant, saisissant les ennemis sur son passage et les projetant en l'air à la fin de sa course.",
          "Crochet bionique": "Il charge et lance un crochet avec son bras bionique, ramenant vers lui la première cible touchée ainsi que les ennemis cachés derrière.",
          "Impact dévastateur": "Le Winter Soldier bondit haut dans les airs puis plonge vers le sol, frappant avec son bras bionique. Cette attaque inflige des dégâts aux ennemis dans la zone d'impact et les marque. Les ennemis marqués meurent instantanément si leurs points de vie passent sous un certain seuil, rechargeant le bras bionique pour relancer l'attaque pendant une courte durée."
        }
      ],
      cdspell: [
          {
              "Roterstern": "2 munitions",
              "Tension entachée": "CD 6sec",
              "Poing du soldat": "CD 12sec",
              "Crochet bionique": "CD 8sec",
              "Impact du Kraken": "recharge"
            }
      ]
    },
  {
      name: "Peni Parker",
      sprite: "./charfullbody/img_heroportrait_1042_fullbody.png",
      health: "600",
      difficulty: "3",
      category: "Tank",
      passivename: "Grimpeuse de mur",
      passive: [{"Grimpeuse de mur":"Appuyez sur la touche de saut afin de grimper sur les surfaces verticales."}],
      spellsname: ["Cyber-toile", "Spider-nid", "Arachno-mines", "Ficelle de toile", "Toile futuriste", "Amélioration SP//dr"],
      spells: [
        {
          "Cyber-toile": "Vous projetez une cyber-toile.",
          "Spider-nid": "Vous générez un Spider-nid sur une zone ciblée. Le Spider-nid générera alors des Spider-drones et créera une Cyber-toile.",
          "Arachno-mines": "Vous déployez des Arachno-mines qui peuvent être cachées au sein d'une Cyber-toile.",
          "Ficelle de toile": "Vous tirez une ficelle de toile qui se lie à une zone ciblée ou à une Cyber-toile. Si la ficelle de toile est trop étirée, elle causera un rappel.",
          "Toile futuriste": "Vous tirez une toile futuriste qui immobilise l'ennemi touché. Cette capacité génère une Cyber-toile si elle frappe l'environnement.",
          "Amélioration SP//dr": "Vous améliorez l'armure SP//dr. Vous repoussez les ennemis se trouvant sur votre chemin tout en déployant périodiquement des Arachno-mines, des Spider-drones et des Cyber-toiles."
        }
      ],
      cdspell: [
          {
              "Lanceur de cyber-toile": "Munitions infinies",
              "Spider-nid bionique": "CD 15sec",
              "Arachno-mine": "4 charges/CD 2sec par charge",
              "Cyber-lien": "CD 3sec",
              "Filet de Cyber-toile": "CD 3sec",
              "Spider-balayeur": "recharge"
            }
      ]
    },
  {
      name: "Star-Lord",
      sprite: "./charfullbody/img_heroportrait_1043_fullbody.png",
      health: "250",
      difficulty: "2",
      category: "Dps",
      passivename: "Null",
      passive: [{"Null": "Null"}],
      spellsname: ["Flingues élémentaires", "Propulsion", "Tir frénétique", "Esquive et recharge", "Vol libre"],
      spells: [
        {
          "Flingues élémentaires": "Vous tirez vers les ennemis avec vos deux flingues élémentaires.",
          "Propulsion": "Vous vous déplacez plus rapidement à l'aide de vos propulseurs.",
          "Tir frénétique": "Vous tirez frénétiquement, infligeant des dégâts aux ennemis à portée.",
          "Esquive et recharge": "Vous esquivez vers la direction où vous vous dirigiez, et vous rechargez vos flingues.",
          "Vol libre": "Vous volez librement et vous visez automatiquement les ennemis en vue."
        }
      ],
      cdspell: [
          {
              "Flingues élémentaires": "40 munitions",
              "Propulsion rocket": "CD 12sec",
              "Barrage de blaster": "CD 8sec",
              "Changement stellaire": "2 charges/CD 3sec",
              "Légende galactique": "recharge"
            }
      ]
    },
  {
      name: "Namor",
      sprite: "./charfullbody/img_heroportrait_1045_fullbody.png",
      health: "250",
      difficulty: "2",
      category: "Dps",
      passivename: "",
      passive: "",
      spellsname: ["Lancer de trident", "Barrière volante", "Invocation d'engeance", "Ordre d'attaque", "Invocation de Giganto"],
      spells: [
        {
          "Lancer de trident": "Vous lancez le trident devant vous, qui lorsque vous touchez un ennemi réduit le temps de recharge de Domination aquatique.",
          "Barrière volante": "Vous conjurez une barrière qui vous protège pendant que vous volez.",
          "Invocation d'engeance": "Vous invoquez une engeance monstrueuse qui attaque automatiquement les ennemis.",
          "Ordre d'attaque": "Vous lancez le trident afin de frapper un ennemi proche. Si vous touchez un ennemi, vous ordonnez à toutes les engeances monstrueuses d'attaquer cet ennemi.",
          "Invocation de Giganto": "Vous invoquez Giganto afin d'écraser les ennemis se trouvant dans une zone ciblée."
        }
      ],
      cdspell: [
          {
              "Trident de Neptune": "Munitions infinies",
              "Bénédiction des profondeurs": "CD 15sec",
              "Domination aquatique": "2 charges/CD 14sec",
              "Colère des sept mers": "CD 6sec",
              "Corne de Protée": "recharge",
              "Engeance de glace": "CD 30sec"
            }
      ]
    },
  {
      name: "Adam Warlock",
      sprite: "./charfullbody/img_heroportrait_1046_fullbody.png",
      health: "250",
      difficulty: "2",
      category: "Heal",
      passivename: "Cocon régénératif",
      passive:[{"Cocon régénératif":"Une fois que son corps a été détruit, Adam peut librement bouger en tant qu'âme et reconstruire son corps à un endroit choisi."}],
      spellsname: ["Énergie quantique", "Explosion quantique", "Liens d'âmes", "Flux vital", "Éveil karmique"],
      spells: [
        {
          "Énergie quantique": "Lance de l'énergie quantique pour faire des dégâts.",
          "Explosion quantique": "Rassemble de l'énergie quantique durant un temps et la relâche sur les ennemis.",
          "Liens d'âmes": "Unit l'âme des alliés sous forme de liens, octroyant du soin sur la durée et répartissant les dégâts le long du lien.",
          "Flux vital": "Cible un allié avec un flux d'énergie vitale rebondissant qui le soigne aussi au moment du lancement. Lance la compétence sur lui-même s'il ne cible personne.",
          "Éveil karmique": "Éveille le karma des alliés pour les ressusciter. Les alliés ressuscités n'ont pas beaucoup de vie mais bénéficient d'une courte période d'invincibilité."
        }
      ],
      cdspell: [
          {
              "Magie quantique": "15 munitions",
              "Amas cosmique": "Utilise 5 balles/CD 0sec",
              "Lien d'âme": "CD 30sec",
              "Avatar de flux de vie": "2 charges/CD 6sec",
              "Éveil karmique": "recharge",
              "Cocon régénératif": "CD 120sec"
            }
      ]
    },
  {
      name: "Jeff The Land Shark",
      sprite: "./charfullbody/img_heroportrait_1047_fullbody (2).png",
      health: "250",
      difficulty: "2",
      category: "Heal",
      passivename: "Gentillesse inconsciente",
      passive: [{"Gentillesse inconsciente":"Réduit les dégâts provenant des coups critiques."}],
      spellsname: ["Joyeuse éclaboussure", "Cache-Cache", "Bulle de soin", "C'est Jeff!"],
      spells: [
        {
          "Joyeuse éclaboussure": "Jeff expulse un jet de soin/Éclaboussure d'eau Il lance une sphère d'eau rapide qui explose à l'impact, blessant les ennemis.",
          "Cache-Cache": "Jeff plonge dans le sol, exposant seulement sa nageoire dorsale, ce qui lui octroie une vitesse supplémentaire et lui permet de grimper les murs.",
          "Bulle de soin": "Crache une bulle qui soigne l'allié qui la collecte et augmente tous les soins reçus par cet allié.",
          "C'est Jeff!": "Jeff plonge dans le sol et refait surface pour avaler ennemis et alliés dans une large zone, activant +Cache-Cache pour une courte durée avant de les éjecter."
        }
      ],
      cdspell: [
                {
                  "Joyeuse éclaboussure": "50 munitions",
                  "Éclaboussure d'eau": "12 munitions",
                  "Bulle de soin": "5 charges/CD 6sec",
                  "Cache-Cache": "CD 0sec",
                  "C'est Jeff!": "recharge"
                }
              ]
    },
  {
      name: "Bruce Banner/Hulk",
      sprite: "./charfullbody/img_heroportrait_1011_fullbody.png",
      health: "900",
      difficulty: "4",
      category: "Tank",
      passivename: "Bond incroyable",
      passive: [{"Bond incroyable":"Maintenez la touche de saut afin de faire un saut chargé qui permet à Hulk (Héros) d'amener au sol un ennemi se trouvant en l'air."}] ,
      spellsname: ["Coup puissant", "Garde indestructible", "Confinement radioactif", "Rafale de gamma", "HULK ÉCRASE !"],
      spells: [
        {
          "Coup puissant": "Vous frappez les ennemis qui se trouvent en face de vous.",
          "Garde indestructible": "Vous et vos alliés proches gagnez un bouclier gamma qui absorbe les dégâts, ces dégâts absorbés sont ensuite convertis en énergie pour HULK ÉCRASE !",
          "Confinement radioactif": "Vous envoyez de l'énergie gamma qui place l'ennemi touché dans un vide quantique qui l'immobilise et l'immunise aux effets de toutes les capacités pendant la durée de cette capacité.",
          "Rafale de gamma": "Vous envoyez une rafale de rayon gamma qui inflige des dégâts.",
          "HULK ÉCRASE !": "Vous déchaînez l'énergie gamma emmagasinée en vous. Hulk se transforme et devient monstrueux pour une courte durée."
        }
      ],
      cdspell: [
        {
          "Coup puissant": "CD 10sec",
          "Garde indestructible": "CD 12sec",
          "Confinement radioactif": "CD 15sec",
          "Rafale de gamma": "CD 8sec",
          "HULK ÉCRASE !": "CD 11sec"
        }
      ]
    },
  {
      name: "Punisher",
      sprite: "./charfullbody/img_heroportrait_1014_fullbody.png",
      health: "300",
      difficulty: "1",
      category: "Dps",
      passivename: "Regard du guerrier",
      passive: [{"Regard du guerrier":"Vous pouvez voir pour une courte durée les ennemis qui quittent votre vision."}],
      spellsname: ["Arsenal double", "Câble de déplacement", "Tourelle de Suppression", "Grenade fumigène", "Déchaînement de feu"],
      spells: [
        {
          "Arsenal double": "Vous tirez sur les ennemis à l'aide de votre fusil automatique, Adjudication./Vous tirez sur les ennemis à l'aide de votre fusil à pompe, Délivrance.",
          "Câble de déplacement": "Vous lancez un câble qui permet au Punisher de se déplacer rapidement.",
          "Tourelle de Suppression": "Déploie une Tourelle de Suppression qui immobilise le Punisher tout en infligeant des dégâts massifs.",
          "Grenade fumigène": "Vous lancez une grenade fumigène qui obscurcit la vision des ennemis.",
          "Déchaînement de feu": "Vous déchaînez deux canons rotatifs et tirez des missiles afin d'abattre vos ennemis."
        }
      ],
      cdspell: [
          {
              "Adjudication": "30 munitions",
              "Délivrance": "8 munitions",
              "Liaison tactique": "CD 20sec",
              "Tourelle de Suppression": "CD 10sec",
              "Grenade fléau": "CD 8sec",
              "Jugement dernier": "recharge",
            }
      ]
    },
  {
      name: "Storm",
      sprite: "./charfullbody/img_heroportrait_1015_fullbody.png",
      health: "250",
      difficulty: "3",
      category: "Dps",
      passivename: "Null",
      passive: [{"Null": "Null"}],
      spellsname: ["Lames de vent", "Changement météo", "Canalisation météorologique", "Frappe de foudre", "Ouragan"],
      spells: [
        {
          "Lames de vent": "Vous lancez des lames de vent.",
          "Changement météo": "Vous changez la météo et octroyez un bonus aux alliés proches. Tempête pour accorder un bonus de vitesse de déplacement; Tonnerre afin d'accorder un bonus de dégâts.",
          "Canalisation météorologique": "Vous canalisez le pouvoir de la météo afin d'amplifier les pouvoirs de Tornade. Tempête afin de lui accorder un bonus de vitesse de déplacement; Tonnerre afin de lui accorder un bonus de dégâts et lui permet d'invoquer des frappes de tonnerre qui infligent des dégâts aux adversaires.",
          "Frappe de foudre": "Vous déchaînez une frappe de foudre.",
          "Ouragan": "Vous vous transformez en un ouragan qui aspire les ennemis proches et leur inflige des dégâts."
        }
      ],
      cdspell: [
          {
              "Lame de vent": "12 munitions",
              "Contrôle de la météo": "CD 15sec",
              "Amplification de la déesse": "CD 10sec",
              "Frappe de foudre": "CD 6sec",
              "Ouragan Oméga": "recharge"
            }
      ]
    },
  {
      name: "Loki",
      sprite: "./charfullbody/img_heroportrait_1016_fullbody.png",
      health: "250",
      difficulty: "4",
      category: "Heal",
      passivename: "Null",
      passive: [{"Null": "Null"}],
      spellsname: ["Missiles mystiques", "Champ de runes", "Projection illusoire", "Permutation", "Coup de poignard", "Discorde invisible", "Métamorphose"],
      spells: [
        {
          "Missiles mystiques": "Vous tirez des missiles mystiques pour soit soigner vos alliés, soit pour frapper vos ennemis.",
          "Champ de runes": "Utilisez des pierres de runes afin de créer un champ magique qui convertit les dégâts subis par les alliés se trouvant au sein de ce cercle en énergie de soin.",
          "Projection illusoire": "Vous projetez un double illusoire qui permet de lancer certaines capacités de Loki.",
          "Permutation": "Vous échangez de place avec un double illusoire ciblé.",
          "Coup de poignard": "Vous assenez un coup de poignard à un ennemi proche, vous infligez des dégâts supplémentaires si vous l'attaquez par derrière.",
          "Discorde invisible": "Vous devenez invisible et invoquez un double illusoire afin de mener vos ennemis en discorde.",
          "Métamorphose": "Vous vous transformez en un allié ou un ennemi ciblé, ce qui vous permet d'utiliser leurs capacités."
        }
      ],
      cdspell: [
          {
              "Missile mystique": "10 munitions",
              "Domaine de régénération": "CD 25sec",
              "Double illusoire": "CD 10sec",
              "Échange fourbe": "CD 15sec",
              "Coup de poignard": "CD 3sec",
              "Discorde": "CD 12sec",
              "Dieu de la malice": "recharge",
              "Renaissance de Laufeyson": "CD 120sec"
            }
      ]
    },
  {
      name: "Doctor Strange",
      sprite: "./charfullbody/img_heroportrait_1018_fullbody.png",
      health: "650",
      difficulty: "3",
      category: "Tank",
      passivename: "Le prix de la magie",
      passive: [{"Le prix de la magie":"De la magie noire s'accumule lorsque vous infligez des dégâts à un ennemi. Si vous ne libérez pas cette magie noire, Docteur Strange subira un effet d'anti-soin."}],
      spellsname: ["Dagues de Denak", "Lévitation mystique", "Déchaînement obscur", "Portail dimensionnel", "Barrière mystique", "Extraction de l'âme"],
      spells: [
        {
          "Dagues de Denak": "Vous projetez des dagues de Denak.",
          "Lévitation mystique": "Vous prenez de l'altitude puis vous volez pour une courte durée.",
          "Déchaînement obscur": "Vous déchaînez de la magie noire qui inflige des dégâts aux ennemis proches.",
          "Portail dimensionnel": "Vous ouvrez un portail entre deux lieux qui peut être emprunté par tous les personnages.",
          "Barrière mystique": "Vous créez une barrière qui absorbe les dégâts.",
          "Extraction de l'âme": "Vous arrachez l'âme de vos ennemis de leur corps, ce qui les assomme pour la période de la compétence. Les dégâts infligés à l'âme de votre adversaire sont directement transmis au corps physique de ce dernier."
        }
      ],
      cdspell: [
          {
              "Dagues de Denak": "6 munitions",
              "Cape de lévitation": "CD 11sec",
              "Maelstrom de folie": "CD 8sec",
              "Pentagramme de Farallah": "CD 172sec",
              "Bouclier du Séraphin": "1600 points de vie",
              "Œil d'Agamotto": "recharge",
              "Maelstrom de Gamma": "CD 30sec"
            }
      ]
  },
  {
      name: "Mantis",
      sprite: "./charfullbody/img_heroportrait_1020_fullbody.png",
      health: "250",
      difficulty: "1",
      category: "Heal",
      passivename: "Faveur de la nature",
      passive:[{"Faveur de la nature":"Vous recevez un bonus de vitesse de déplacement tant que vous n'êtes pas blessé et que vous soignez en consumant des orbes de vie."}] ,
      spellsname: ["Ronce vitale", "Spore soporifique", "Transfert de puissance", "Absorption de puissance", "Soin régénérant", "Aura de vitalité"],
      spells: [
        {
          "Ronce vitale": "Vous tirez une ronce d'énergie vitale, et vous gagnez une orbe de vie si vous effectuez un coup critique.",
          "Spore soporifique": "Vous projetez une spore qui endort l'ennemi le plus proche.",
          "Transfert de puissance": "Vous consumez une orbe de vie afin de donner à un allié un bonus de dégâts.",
          "Absorption de puissance": "Vous consumez une orbe de vie afin de vous donner un bonus de dégâts.",
          "Soin régénérant": "Vous consumez une orbe de vie afin de donner du soin régulier à un allié.",
          "Aura de vitalité": "Vous libérez de l'énergie vitale autour de vous. Vous accordez du soin régulier ainsi qu'un bonus de vitesse de déplacement aux alliés adjacents."
        }
      ],
      cdspell: [
          {
              "Frappe d'énergie vitale": "20 munitions",
              "Spore de sommeil": "CD 14sec",
              "Inspiration allié": "CD 3sec",
              "Colère naturelle": "CD 3sec",
              "Fleur de soin": "CD 3sec",
              "Résurgence de l'âme": "recharge"
            }
      ]
    },
  {
      name: "Captain America",
      sprite: "./charfullbody/img_heroportrait_1022_fullbody (1).png",
      health: "600",
      difficulty: "2",
      category: "Tank",
      passivename: "Null",
      passive: [{"Null": "Null"}],
      spellsname: ["Combo du bouclier", "Saut Intrépide", "Bouclier énergétique", "Charge du bouclier", "Frappe aérienne", "Déviation du bouclier", "Sentier du bouclier"],
      spells: [
        {
          "Combo du bouclier": "Frappez les ennemis de près. Le deuxième coup permet de lancer le bouclier qui peut ricocher.",
          "Saut Intrépide": "Augmentez votre vitesse, permettant le Saut Intrépide.",
          "Bouclier énergétique": "Lancez le bouclier chargé d'énergie pour frapper les ennemis sur son passage.",
          "Charge du bouclier": "Levez le bouclier et chargez en avant.",
          "Frappe aérienne": "Frappez le sol depuis les airs sur la zone ciblée, projetant les ennemis en l'air.",
          "Déviation du bouclier": "Levez le bouclier pour dévier les projectiles entrants, les faisant ricocher dans des directions aléatoires.",
          "Sentier du bouclier": "Bouclier levé, tracez un chemin en avant, accordant à vous-même et aux alliés sur le passage des bonus continus de santé et de vitesse de déplacement."
        }
      ],
      cdspell: [
          {
              "Frappe du Sentinelle": "CD Infini",
              "Ruée Intrépide": "CD 0sec",
              "Scie d'Énergie en Vibranium": "CD 5sec",
              "Ruée de la Liberté": "CD 5sec",
              "Frappe du Super-Soldat": "CD 8sec",
              "Légende Vivante": "500 points de bouclier",
              "Charge de la Liberté": "recharge"
            }
      ]
    },
  {
      name: "Rocket Racoon",
      sprite: "./charfullbody/img_heroportrait_1023_fullbody (1).png",
      health: "250",
      difficulty: "1",
      category: "Heal",
      passivename: ["Escalade sauvage", "As du vol"],
      passive: [
        {
          "Escalade sauvage":"Maintenez la touche de saut afin d'escalader un mur",
          "As du vol":"Maintenez la touche de saut afin de descendre lentement."
        }
      ],
      spellsname: ["Tir double", "Propulsion de jetpack", "Tour de retour au combat", "Amplificateur de puissance"],
      spells: [
        {
          "Tir double": "Vous tirez des projectiles qui infligent des dégâts./Vous tirez des orbes rebondissantes qui soignent les alliés.",
          "Propulsion de jetpack": "Vous vous propulsez vers l'avant.",
          "Tour de retour au combat": "Vous déployez une tour de retour au combat qui réanime un allié vaincu et qui produit périodiquement des packs d'armure et des charges de Propulsion de jetpack pour Rocket Raccoon.",
          "Amplificateur de puissance": "Vous déployez un amplificateur de puissance qui accorde un bonus de dégâts aux personnages alliés proches."
        }
      ],
      cdspell: [
          {
              "Mode mitraille": "45 munitions",
              "Mode soin": "8 orbes",
              "Propulsion de jetpack": "CD 5sec",
              "Tour de retour au combat": "CD 25sec",
              "Mode réparation": "recharge"
            }
      ]
    },
  {
      name: "Hela",
      sprite: "./charfullbody/img_heroportrait_1024_fullbody.png",
      health: "250",
      difficulty: "3",
      category: "Dps",
      passivename: "Tempête de corbeaux de Nastrond",
      passive: [{"Tempête de corbeaux de Nastrond": "Un corbeau de Nastrond apparaîtra là où vous avez vaincu un ennemi. Celui-ci explose peu de temps après./Maintenez la touche de saut afin de tomber lentement."}],
      spellsname: ["Ronces de l'épée de nuit", "Nuée de corbeaux", "Sphère de Hel", "Explosion de ronces", "Pluie de corbeaux"],
      spells: [
        {
          "Ronces de l'épée de nuit": "Vous projetez des ronces de l'épée de nuit.",
          "Nuée de corbeaux": "Vous vous transformez en une nuée de corbeaux de Hel et volez. Réappuyez sur la touche de la compétence afin de revenir à votre forme normale.",
          "Sphère de Hel": "Vous projetez une sphère de Hel qui explose, assommant tous les ennemis proches.",
          "Explosion de ronces": "Vous projetez de multiples ronces de l'épée de nuit qui explosent peu de temps après.",
          "Pluie de corbeaux": "Vous vous envolez jusqu'au ciel afin de projeter des corbeaux de Nastrond à volonté."
        }
      ],
      cdspell: [
          {
              "Ronce de l'épée de nuit": "8 munitions",
              "Nuée astrale": "CD 12sec",
              "Draineuse d'âme": "CD 12sec",
              "Nuit perçante": "CD 8sec",
              "Déesse de la mort": "recharge"
            }
      ]
    },
  {
      name: "Black Panther",
      sprite: "./charfullbody/img_heroportrait_1026_fullbody.png",
      health: "300",
      difficulty: "4",
      category: "Dps",
      passivename: ["Ruse de la Panthère","Pas Subtil"],
      passive:[
        {
          "Ruse de la Panthère": "Inflige plus de dégâts lorsque la santé est basse.",
          "Pas Subtil": "Maintenez Espace pour courir sur un mur ; effectuez un saut après vous être détaché du mur.",
        }
      ],
      spellsname: ["Griffes en Vibranium", "Bond du félin", "Tourbillon de Vibranium", "Lance d'énergie", "Invocation de Bast"],
      spells: [
        {
          "Griffes en Vibranium": "Frappe avec les griffes en Vibranium vers l'avant.",
          "Bond du félin": "S'élance en avant et inflige des dégâts aux ennemis. Toucher un ennemi affecté par une Marque de Vibranium produit un bonus de santé et réinitialise la capacité. Gagne 50 de bouclier si des ennemis sont touchés.",
          "Tourbillon de Vibranium": "Tournoie vers l'avant et applique une Marque de Vibranium aux ennemis touchés.",
          "Lance d'énergie": "Lance une lance d'énergie en Vibranium vers l'avant, créant un Champ de Force en Vibranium et appliquant une Marque de Vibranium aux ennemis dans son rayon.",
          "Invocation de Bast": "Invoque Bast pour bondir en avant, infligeant des dégâts et appliquant une Marque de Vibranium aux ennemis touchés."
        }
      ],
      cdspell: [
          {
              "Griffes en Vibranium": "CD Infini",
              "Déchirure Sprint": "CD 12sec (réinitialisé si touché)",
              "Coup de Pied Tournoyant": "CD 8sec",
              "Lancer de Lance": "2 charges/CD 8sec",
              "Descente de Bast": "recharge"
            }
      ]
    },
  {
      name: "Groot",
      sprite: "./charfullbody/img_heroportrait_1027_fullbody.png",
      health: "900",
      difficulty: "1",
      category: "Tank",
      passivename: "Colosse floral",
      passive: [{"Colosse floral":"Les murs de bois se trouvant près de Groot s'éveillent, ce qui active leurs effets supplémentaires."}],
      spellsname: ["Lianes attaquantes", "Mur lacéronce", "Mur bois-de-fer", "Bombe de spores", "Emprisonnement végétal"],
      spells: [
        {
          "Lianes attaquantes": "Vous lancez des lianes pour attaquer vos ennemis.",
          "Mur lacéronce": "Vous ciblez une zone et vous y faites pousser un mur lacéronce. Lorsqu'éveillé, le mur frappera les ennemis proches qui sont attaqués par Groot et ses alliés.",
          "Mur bois-de-fer": "Vous ciblez une zone et vous y faites pousser un mur bois-de-fer. Lorsqu'éveillé, le mur vous accorde de la vie supplémentaire lorsque des ennemis proches subissent des dégâts.",
          "Bombe de spores": "Vous lancez une bombe de spore explosive qui se scinde en plusieurs petites explosions de spores.",
          "Emprisonnement végétal": "Vous lancez une massive grappe de lianes qui amène les ennemis en son centre et les emprisonne."
        }
      ],
      cdspell: [
          {
              "Frappe de liane": "8 munitions",
              "Mur lacéronce": "2 charges/CD 4sec",
              "Mur bois-de-fer": "CD 5sec",
              "Bombe de spore": "CD 4sec",
              "Prison suffocante": "recharge",
            }
      ]
    },
  {
      name: "Magik",
      sprite: "./charfullbody/img_heroportrait_1029_fullbody.png",
      health: "250",
      difficulty: "3",
      category: "Dps",
      passivename: "Puissance des Limbes",
      passive: [{"Puissance des Limbes":"Les dégâts que vous infligez sont convertis en vie supplémentaire."}],
      spellsname: ["Épée de l'âme", "Disque à pas", "Ruée démoniaque", "Tourbillon de l'âme", "Frappe tranchante", "Invocation des Limbes", "Transformation Darkchild"],
      spells: [
        { 
          "Épée de l'âme": "Vous frappez devant vous avec l'épée de l'âme.",
          "Disque à pas": "Vous sautez à travers un disque à pas, ce qui vous téléporte un peu plus loin selon votre déplacement.",
          "Ruée démoniaque": "Vous vous ruez en avant, puis vous projetez un ennemi en l'air.",
          "Tourbillon de l'âme": "En sortant d'un disque à pas, vous pouvez faire tournoyer votre épée de l'âme.",
          "Frappe tranchante": "Vous frappez avec une attaque tranchante à distance.",
          "Invocation des Limbes": "En sortant d'un disque à pas, vous pouvez invoquer un démon des Limbes qui attaque les ennemis.",
          "Transformation Darkchild": "Vous vous transformez en Darkchild. Vos capacités sont améliorées."
        }
      ],
      cdspell: [
                {
                  "Épée de l'âme": "CD Infini",
                  "Disques à pas": "2 charges/CD 7sec",
                  "Incursion ombrale": "CD 8sec",
                  "Tourbillon eldritch": "CD 0sec",
                  "Tranchant de Magik": "CD 6sec",
                  "Rage du démon": "CD 0sec",
                  "Darkchild": "recharge",
                  "Maître des disques": "CD 30sec"
                }
              ]
    },
  {
      name: "Luna Snow",
      sprite: "./charfullbody/img_heroportrait_1031_fullbody.png",
      health: "400",
      difficulty: "3",
      category: "Support",
      passivename: "Patineuse élégante",
      passive: [{"Patineuse élégante": "Vous vous rendez automatiquement de la santé lorsque vous utilisez Art de la glace ou Froid absolu./Lorsque vous avancez, vous vous mettez à patiner."}],
      spellsname: ["Pics de glace", "Art de la glace", "Aura d'idole", "Froid absolu", "Performance glacée"],
      
      spells: [
        {
          "Pics de glace": "Vous projetez des pics de glace qui soignent les alliés, ou blessent les ennemis.",
          "Art de la glace": "En projetant vos pics de glace, vous vous soignez lorsque vous soignez un allié ou vous blessez un ennemi.",
          "Aura d'idole": "Vous attachez une aura d'idole à un allié. Le joueur allié portant une aura d'idole se voit également être soigné lorsque Luna Snow soigne d'autres alliés.",
          "Froid absolu": "Vous projetez une boule de glace qui gèle le premier ennemi touché tout en vous rendant de la santé.",
          "Performance glacée": "Vous montez sur la scène et vous vous mettez à danser ! Vous pouvez alterner entre deux performances, l'une soigne les alliés proches, l'autre leur accorde un bonus de dégâts."
        }
      ],
      cdspell: [
          {
              "Glace de lumière et de ténèbres": "30 munitions",
              "Art de la glace": "CD 12sec",
              "Partage de la scène": "CD 8sec",
              "Froid absolu": "CD 12sec",
              "Destin de deux mondes": "recharge"
            }
      ]
    },
  {
      name: "Iron Man",
      sprite: "./charfullbody/img_heroportrait_1034_fullbody.png",
      health: "250",
      difficulty: "2",
      category: "Dps",
      passivename: "Null",
      passive: [{"Null": "Null"}],
      spellsname: ["Répulseurs/Unirayon", "Hyper vélocité", "Surcharge de l'armure", "Barrage de micro missiles", "Canon à pulsation invincible"],
      
      spells: [
        {
          "Répulseurs/Unirayon": "Vous tirez en avant à l'aide de vos canons à nano pulsions./Vous projetez un unirayon.",
          "Hyper vélocité": "Activer le mode d'hyper vélocité afin de voler vers l'avant.",
          "Surcharge de l'armure": "Activer le mode de surcharge de l'armure, ce qui augmente les dégâts infligés par Répulseurs et Unirayon.",
          "Barrage de micro missiles": "Lorsque Hyper vélocité ou Surcharge de l'armure est activé, Iron Man peut lancer un barrage de micro missiles.",
          "Canon à pulsation invincible": "Vous tirez un coup dévastateur de votre canon à pulsation, infligeant des dégâts massifs dans la zone ciblée à l'impact."
        }
      ],
      cdspell: [
          {
              "Répulseurs": "100 munitions",
              "Unirayon": "100 munitions",
              "Hyper vélocité": "CD 8sec",
              "Surcharge de l'armure": "CD 19sec",
              "Barrage de micro missiles": "CD 2sec",
              "Canon à pulsation invincible": "recharge"
            }
      ]
    },
    {
      "name": "Sorcière Rouge",
      "sprite": "./charfullbody/img_heroportrait_1038_fullbody.png",
      "health": "250",
      "difficulty": "1",
      "category": "Dps",
      "passivename": "Télékinésie",
      "passive": [{"Télékinésie": "Maintenez la touche de saut afin de tomber lentement."}],
      "spellsname": ["Contrôle du chaos", "Projection mystique", "Seau sombre", "Explosion chtonienne", "Effacement de la réalité", "Lien Chaotique"],
      "spells": [
        {
          "Contrôle du chaos": "Utilisez la magie du chaos afin d'attaquer vos ennemis et de restaurer de l'énergie du chaos.",
          "Projection mystique": "Utilisez l'état de projection afin de voler librement. Réappuyez sur le bouton de la capacité afin d'annuler la capacité.",
          "Seau sombre": "Vous projetez une orbe d'énergie qui, au contact du premier ennemi touché ou de l'environnement, génère un champ de force qui assomme périodiquement les ennemis en son sein. Vous pouvez exploser l'orbe d'énergie manuellement en appuyant sur la touche de la compétence.",
          "Explosion chtonienne": "Consommez de l'énergie du chaos afin de projeter des missiles magiques qui infligent des dégâts aux ennemis.",
          "Effacement de la réalité": "Volez librement pendant que vous canalisez votre énergie, puis déchaînez-la et infligez des dégâts massifs.",
          "Lien Chaotique": "La Sorcière rouge peut imprégner Magnéto d'énergie du chaos afin d'enchanter son épée. Magnéto peut alors utiliser cette énergie pour frapper ses ennemis à moyenne distance."
        }
      ],
      "cdspell": [
        {
          "Contrôle du chaos": "CD Infini",
          "Projection mystique": "2 charges/CD 10sec",
          "Seau sombre": "CD 12sec",
          "Explosion chtonienne": "4 charges/CD 3sec",
          "Effacement de la réalité": "recharge",
          "Lien Chaotique": "CD 30sec"
        }
      ]
    },
  {
      name: "Venom",
      sprite: "./charfullbody/img_heroportrait_1035_fullbody.png",
      health: "800",
      difficulty: "3",
      category: "Tank",
      passivename: "Biologie Extraterrestre",
      passive: [{"Biologie Extraterrestre":"Appuyez sur Espace pour grimper aux murs et, tout en grimpant, appuyez sur le clic gauche pour sprinter."}],
      spellsname: ["Tentacules déchaînées", "Toile de balancement", "Régénération symbiote", "Plongeon dévastateur", "Emprise tentaculaire", "Prédateur souterrain"],
      spells: [
        {
          "Tentacules déchaînées": "Déchaînez des tentacules vers l'avant pour attaquer les ennemis.",
          "Toile de balancement": "Lancez une toile vers l'avant, permettant un balancement unique dans la direction souhaitée.",
          "Régénération symbiote": "Générez un bonus de santé contre les dégâts. Plus la santé de Venom est basse, plus le bonus de santé généré est important.",
          "Plongeon dévastateur": "Foncez vers l'emplacement ciblé depuis une certaine hauteur. À l'atterrissage, infligez des dégâts aux ennemis à proximité, les repoussant vers le point d'impact.",
          "Emprise tentaculaire": "Projetez des tentacules pour ralentir les ennemis à portée. Les ennemis incapables de se libérer à temps subissent des dégâts.",
          "Prédateur souterrain": "Creusez sous terre pour vous déplacer librement. Attendez un moment ou appuyez sur Q pour dévorer les ennemis à la surface et générer un bonus de santé."
        }
      ],
      cdspell: [
          {
              "Prédation Sombre": "CD Infini",
              "Balancement de Venom": "CD 8sec",
              "Résilience Symbiotique": "CD 15sec",
              "Arrivée Frénétique": "CD 8sec",
              "Corrosion Cellulaire": "CD 8sec",
              "Festin des abysses": "recharge"
            }
      ]
    },
]

export default chara