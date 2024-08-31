import express from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";

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
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(401).send({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = password === user.password;
        if (!isMatch) {
            return response.status(401).send({ message: 'Mot de passe incorrect' });
            
        } else {
            return response.status(200).send(user);
        }

    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message });
    }
});

// Déconnexion
router.post('/logout', (request, response) => {
    request.session.destroy();
    response.status(200).send({ message: 'Logged out' });
});

export default router;