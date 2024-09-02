import express from "express";
import dotenv from 'dotenv';
import sequelize from "./config.js"; 
import userRoute from "./routes/usersRoute.js";
import authRoute from './routes/authRoute.js';
import newsRoute from './routes/newsRoute.js';
import herosRoute from './routes/herosRoute.js';
import streamerRoute from './routes/streamerRoute.js';
import cors from "cors";
import session from "express-session";
import SequelizeStore from 'connect-session-sequelize';

dotenv.config();

// initialiser sequelize
const SequelizeSessionStore = SequelizeStore(session.Store);
const store = new SequelizeSessionStore({
    db: sequelize,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        httpOnly: true,
        secure: false, // mettre sur true une fois en https
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

function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    }
    res.status(401).send('Vous devez être connecté pour accéder à cette page');
}

function protectedRouteHandler(req, res) {
    // récupérer les informations de l'utilisateur à partir de la session
    const user = {
        id: req.session.userId,
        username: req.session.username,  
        rank: req.session.rank
    };
    res.status(200).json(user);  
}

// route pour renvoyer les informations de l'utilisateur
app.use('/users', isAuthenticated, protectedRouteHandler);

sequelize.sync()
    .then(() => {
        console.log('Connecté à la base de données');
        app.listen(PORT, () => {
            console.log(`L'application écoute sur le port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });