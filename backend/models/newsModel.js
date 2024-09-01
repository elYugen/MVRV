import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
    {
    name: { type: String, required: true, unique: true },
    cover: { type: String, required: true },
    resume: { type: String, required: true },
    content: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export const Article = mongoose.model('article', ArticleSchema);