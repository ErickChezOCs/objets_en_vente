const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');


dotenv.config({ path: './config/config.env'});

connectDB();
const app = express();



app.use(express.json());

 app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-with,Content,Accept,Content-Type,Error,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS');
    next();
 });

 

 




/*app.use( 'url ou end point en premier argument) l'application frontend
fait une requête sur cette route pour recevoir une réponse contenant la
variable stuff ici définie */


app.use('/api/stuff',stuffRoutes);

app.use('/api/auth', userRoutes);


module.exports = app;