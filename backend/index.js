import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/usersRoute.js";
import authRoute from './routes/authRoute.js';
import newsRoute from './routes/newsRoute.js';
import herosRoute from './routes/herosRoute.js';
import cors from "cors";
import session from "express-session";

const app = express();

// Configuration de la session ici
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // True en production
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// Configuration CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
}));

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Bonjour');
});

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/news', newsRoute);
app.use('/heros', herosRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connecté à la base de donnée');
        app.listen(PORT, () => {
            console.log(`App écoute sur le port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).send('vous devez être connecté pour accéder à cette page');
}

function protectedRouteHandler(req, res) {
    res.send('vous êtes connecté');
}

app.use('/profile', isAuthenticated, protectedRouteHandler);