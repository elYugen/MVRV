import express from "express";
import sequelize from "../config.js";
import defineUserModel from "../models/userModel.js";

const router = express.Router();

const User = defineUserModel(sequelize);

router.post('', async (request, response) => {
    try {
        const { username, password, email, rank } = request.body;

        if (!username || !password || !email) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const newUser = {
            username,
            password,
            email,
            rank
        };

        const user = await User.create(newUser);
        return response.status(201).send(user);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const users = await User.findAll();
        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findByPk(id);
        if (!user) {
            return response.status(404).send({ message: "Utilisateur non trouvé" });
        }
        return response.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const [updatedRows] = await User.update(request.body, {
            where: { id: id }
        });
        if (updatedRows === 0) {
            return response.status(404).send({ message: "Utilisateur non trouvé" });
        }
        const updatedUser = await User.findByPk(id);
        return response.status(200).json(updatedUser);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedRows = await User.destroy({
            where: { id: id }
        });

        if (deletedRows === 0) {
            return response.status(404).json({ message: "Cet utilisateur n'existe pas" });
        }

        return response.status(200).send({ message: "Cet utilisateur a bien été supprimé" });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;