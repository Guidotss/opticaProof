import express from 'express';
import morgan from 'morgan';
import session from 'express-session'; 
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import passport from 'passport';
import glassesRoutes from './routes/glasses.routes.js';
import './dataBase/connect.js';
dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(session({
    store: MongoStore.create({ 
        // eslint-disable-next-line no-undef
        mongoUrl: `mongodb+srv://Guido:${ process.env.DB_PASSWORD }@cluster0.tijy1to.mongodb.net/?retryWrites=true&w=majority`,
        // eslint-disable-next-line no-undef
        mongoOpitons: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl:600
    }),
    // eslint-disable-next-line no-undef
    secret: `${process.env.SECRET}`,
    resave: false,
    saveUninitialized: false,
})); 
app.use(passport.initialize());
app.use(passport.session());


app.use('/glasses', glassesRoutes);


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 0;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${server.address().port}`);
}); 




