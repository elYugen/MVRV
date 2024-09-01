import mongoose from "mongoose";

const StreamerSchema = new mongoose.Schema(
    {
    name: { type: String, required: true, unique: true },
    picture: { type: String, required: true },
    link: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export const Streamer = mongoose.model('streamer', StreamerSchema);