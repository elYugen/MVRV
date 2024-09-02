import express from "express";
import bcrypt from "bcryptjs";
import sequelize from "../config.js";
import defineUserModel from "../models/userModel.js";

const User = defineUserModel(sequelize); 

const router = express.Router();

// Inscription
router.post('/register', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password || !request.body.email) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const newUser = {
            username: request.body.username,
            password: hashedPassword,
            email: request.body.email,
        };
        const user = await User.create(newUser);
        return response.status(201).send(user);
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Connexion
router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return response.status(401).send({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = password === user.password;
        if (!isMatch) {
            return response.status(401).send({ message: 'Mot de passe incorrect' });
        }

        // stock les informations utilisateur dans la session
        request.session.userId = user.id;
        request.session.username = user.username;
        request.session.rank = user.rank;

        // Retourne l'utilisateur sans le mot de passe
        const userWithoutPassword = {
            id: user.id,
            username: user.username,
            rank: user.rank,
        };

        return response.status(200).send(userWithoutPassword);

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/me', async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).send({ message: 'Non authentifié' });
    }

    try {
        const user = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] }
        });
        if (!user) {
            return res.status(404).send({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Déconnexion
router.post('/logout', (request, response) => {
    request.session.destroy();
    response.status(200).send({ message: 'Logged out' });
});

export default router;