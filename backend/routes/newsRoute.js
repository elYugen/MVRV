import express from "express"
import {Article} from "../models/newsModel.js";


const router = express.Router();

router.post('', async (request, response) => {
    try {
        if (!request.body.name || !request.body.cover || !request.body.resume || !request.body.content) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            })
        }

        const newArticle = {
            name: request.body.name,
            cover: request.body.cover,
            resume: request.body.resume,
            content: request.body.content,
        }

        const article = await Article.create(newArticle);
        return response.status(201).send(article)

    } catch (error) {
        console.log(error)
        response.status(500).send({message: error.message})
    }
})

router.get('/', async (request, response) => {
    try {
        const article = await Article.find();
        return response.status(200).json({
            count: article.length,
            data: article
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const article = await Article.findById(id);
        return response.status(200).json(article)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
    }
})

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await Article.findByIdAndUpdate(id, request.body, {new: true})
        return response.status(200).json(result)
    } catch (error) {
        console.log(error.message);
        response.status(404).send({ message: error.message })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const article = await Article.findByIdAndDelete(id)

        if (!article) {
            response.status(404).json({message:"Cet article n'existe pas"})
        }

        response.status(200).send({message: "Cet article à bien été supprimé"})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message})
        
    }
})



export default router;