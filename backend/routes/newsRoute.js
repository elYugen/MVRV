import express from "express";
import sequelize from "../config.js"; 
import defineArticleModel from "../models/newsModel.js";

const router = express.Router();

// Initialiser le modèle Article
const Article = defineArticleModel(sequelize);

router.post('', async (request, response) => {
    try {
        if (!request.body.name || !request.body.cover || !request.body.resume || !request.body.content) {
            return response.status(400).send({
                message: "Veuillez fournir tous les champs",
            });
        }

        const newArticle = {
            name: request.body.name,
            cover: request.body.cover,
            resume: request.body.resume,
            content: request.body.content,
        };

        const article = await Article.create(newArticle);
        return response.status(201).send(article);

    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

router.get('/', async (request, response) => {
    try {
        const articles = await Article.findAll();
        return response.status(200).json({
            count: articles.length,
            data: articles
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const article = await Article.findByPk(id);
        if (!article) {
            return response.status(404).send({message: "Article non trouvé"});
        }
        return response.status(200).json(article);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const [updatedRows] = await Article.update(request.body, {
            where: { id: id }
        });
        if (updatedRows === 0) {
            return response.status(404).send({message: "Article non trouvé"});
        }
        const updatedArticle = await Article.findByPk(id);
        return response.status(200).json(updatedArticle);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedRows = await Article.destroy({
            where: { id: id }
        });

        if (deletedRows === 0) {
            return response.status(404).json({message: "Cet article n'existe pas"});
        }

        return response.status(200).send({message: "Cet article a bien été supprimé"});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;