import express from "express";
import sequelize from "../config.js"; 
import defineModels from "../models/herosModel.js";

const router = express.Router();

const { Hero, Passive, Spell } = defineModels(sequelize);

router.post('', async (request, response) => {
    try {
        const { name, sprite, icon, tier, health, difficulty, category, passives, spells } = request.body;

        if (!name || !sprite || !icon || !tier || health === undefined || difficulty === undefined || !category || !passives || !spells) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const hero = await Hero.create({
            name,
            sprite,
            icon,
            tier,
            health,
            difficulty,
            category
        });

        // Create passives
        await Promise.all(passives.map(passive => 
            Passive.create({ ...passive, hero_id: hero.id })
        ));

        // Create spells
        await Promise.all(spells.map(spell => 
            Spell.create({ ...spell, hero_id: hero.id })
        ));

        return response.status(201).send(hero);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const heroes = await Hero.findAll({
            include: [Passive, Spell]
        });
        return response.status(200).json({
            count: heroes.length,
            data: heroes
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const hero = await Hero.findByPk(id, {
            include: [Passive, Spell]
        });

        if (!hero) {
            return response.status(404).json({ message: "Hero not found" });
        }

        return response.status(200).json(hero);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { name, sprite, icon, tier, health, difficulty, category, passives, spells } = request.body;

        const hero = await Hero.findByPk(id);

        if (!hero) {
            return response.status(404).json({ message: "Hero not found" });
        }

        await hero.update({
            name,
            sprite,
            icon,
            tier,
            health,
            difficulty,
            category
        });

        // Update passives
        await Passive.destroy({ where: { hero_id: id } });
        await Promise.all(passives.map(passive => 
            Passive.create({ ...passive, hero_id: id })
        ));

        // Update spells
        await Spell.destroy({ where: { hero_id: id } });
        await Promise.all(spells.map(spell => 
            Spell.create({ ...spell, hero_id: id })
        ));

        const updatedHero = await Hero.findByPk(id, {
            include: [Passive, Spell]
        });

        return response.status(200).json(updatedHero);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedRows = await Hero.destroy({
            where: { id: id }
        });

        if (deletedRows === 0) {
            return response.status(404).json({ message: "Hero not found" });
        }

        return response.status(200).send({ message: "Hero has been deleted" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;