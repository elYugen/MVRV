import express from "express";
import sequelize from "../config.js"; 
import defineStreamerModel from "../models/streamerModel.js";

const router = express.Router();

// Initialiser le modèle Article
const Streamer = defineStreamerModel(sequelize);

router.post('', async (request, response) => {
    try {
        const { name, picture, link } = request.body;

        if (!name || !picture || !link) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const newStreamer = {
            name,
            picture,
            link,
        };

        const streamer = await Streamer.create(newStreamer);
        return response.status(201).send(streamer);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const streamers = await Streamer.findAll();
        return response.status(200).json({
            count: streamers.length,
            data: streamers
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const streamer = await Streamer.findByPk(id);
        if (!streamer) {
            return response.status(404).send({ message: "Streamer non trouvé" });
        }
        return response.status(200).json(streamer);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const [updatedRows] = await Streamer.update(request.body, {
            where: { id: id }
        });
        if (updatedRows === 0) {
            return response.status(404).send({ message: "Streamer non trouvé" });
        }
        const updatedStreamer = await Streamer.findByPk(id);
        return response.status(200).json(updatedStreamer);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedRows = await Streamer.destroy({
            where: { id: id }
        });

        if (deletedRows === 0) {
            return response.status(404).json({ message: "Ce streamer n'existe pas" });
        }

        return response.status(200).send({ message: "Ce streamer a bien été supprimé" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;