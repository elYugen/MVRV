import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        sprite: { type: String, required: true },
        icon: { type: String, required: true },
        tier: { type: String, required: true },
        health: { type: Number, required: true },
        difficulty: { type: Number, required: true },
        category: { type: String, required: true },
        passivename: [{ type: String, required: true }], // tableau de noms des passifs
        passive: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true }
            }
        ],
        spellsname: [{ type: String, required: true }], // tableau de noms des sorts
        spells: [
            {
                name: { type: String, required: true },
                description: { type: String, required: true }
            }
        ]
    },
    {
        timestamps: true
    }
);

export const Hero = mongoose.model('hero', HeroSchema);
