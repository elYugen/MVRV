import express from 'express';
import { Hero } from '../models/herosModel.js';

const router = express.Router();


router.post('', async (request, response) => {
    try {
        const { name, sprite, icon, tier, health, difficulty, category, passivename, passive, spellsname, spells } = request.body;

        if (!name || !sprite || !icon || !tier || health === undefined || difficulty === undefined || !category || !passivename || !passive || !spellsname || !spells) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const newHero = {
            name,
            sprite,
            icon,
            tier,
            health,
            difficulty,
            category,
            passivename,
            passive,
            spellsname,
            spells
        };


        const hero = await Hero.create(newHero);
        return response.status(201).send(hero);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});


router.get('/', async (request, response) => {
    try {
        const heroes = await Hero.find();
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
        const hero = await Hero.findById(id);

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
        const updatedHero = await Hero.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedHero) {
            return response.status(404).json({ message: "Hero not found" });
        }

        return response.status(200).json(updatedHero);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const hero = await Hero.findByIdAndDelete(id);

        if (!hero) {
            return response.status(404).json({ message: "Hero not found" });
        }

        return response.status(200).send({ message: "Hero has been deleted" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
