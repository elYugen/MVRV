import express from "express"
import {User} from "../models/userModel.js";


const router = express.Router();

router.post('', async (request, response) => {
    try {
        if (!request.body.username || !request.body.password || !request.body.email) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            })
        }

        const newUser = {
            username: request.body.username,
            password: request.body.password,
            email: request.body.email,
        }

        const user = await User.create(newUser);
        return response.status(201).send(user)

    } catch (error) {
        console.log(error)
        response.status(500).send({message: error.message})
    }
})

router.get('/', async (request, response) => {
    try {
        const users = await User.find();
        return response.status(200).json({
            count: users.length,
            data: users
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const user = await User.findById(id);
        return response.status(200).json(user)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await User.findByIdAndUpdate(id, request.body, {new: true})
        return response.status(200).json(result)
    } catch (error) {
        console.log(error.message);
        response.status(404).send({ message: error.message })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const user = await User.findByIdAndDelete(id)

        if (!user) {
            response.status(404).json({message:"Cet utilisateur n'existe pas"})
        }

        response.status(200).send({message: "Cet utilisateur à bien été supprimé"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
        
    }
})



export default router;