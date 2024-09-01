import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoute from "./routes/usersRoute.js";
import authRoute from './routes/authRoute.js';
import newsRoute from './routes/newsRoute.js';
import herosRoute from './routes/herosRoute.js';
import streamerRoute from './routes/streamerRoute.js';
import cors from "cors";
import session from "express-session";
import MongoStore from 'connect-mongo';

const app = express();

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: mongoDBURL,
        collectionName: 'sessions',
    }),
    cookie: {
        httpOnly: true,
        secure: false, //mettre sur true une fois en https
        maxAge: 1000 * 60 * 60 * 24 // 1 jour
    }
}));

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
app.use('/streamers', streamerRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connecté à la base de données');
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
    res.status(401).send('Vous devez être connecté pour accéder à cette page');
}

function protectedRouteHandler(req, res) {
    // permet de récupérer les infos de l'utilisateur grace a la session
    const user = {
        _id: req.session.userId,
        username: req.session.username,  
        rank: req.session.rank
    };
    res.status(200).json(user);  
}

// route renvoie les informations de l'utilisateur
app.use('/users', isAuthenticated, protectedRouteHandler);

