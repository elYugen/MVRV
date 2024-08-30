import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    rank: {type: Number, default: 1} // 1 est le rang par défaut des nouveaux utilisateurs, 7 celui de superadmin, 3 de modérateur
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model('user', UserSchema);