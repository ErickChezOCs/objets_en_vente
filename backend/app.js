const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://lihay:Njhih6FHdDffqjt4@cluster0.opqfgdc.mongodb.net/?retryWrites=true&w=majority',
                 { useNewUrlParser:true,
                  useUnifiedTopology:true})
                  .then(()=> console.log('Connexion à MongoDB réussie !'))
                  .catch(()=> console.log('Connexion à MongoDB échouée!'));

app.use(express.json());


 app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-with,Content,Accept,Content-Type,Error,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH,OPTIONS');
    next();
 });

 app.post('/api/stuff', (req,res,next) => {
    console.log(req.body);
    res.status(201).json({
        message:'Objet créé!'
    });
 });

/*app.use( 'url ou end point en premier argument) l'application frontend
fait une requête sur cette route pour recevoir une réponse contenant la
variable stuff ici définie */
app.get('/api/stuff',(req,res,next) => {
    const stuff = [
        {
         _id :'leid1',
         title : 'mon obje1',
         description : 'les infos sur objet1',
         imageUrl : 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 
         price : 4900,
         userId : 'lidduuser'
        },
        {
            _id :'leid2',
            title : 'mon obje2',
            description : 'les infos sur objet2',
            imageUrl : 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg', 
            price : 2900,
            userId : 'lidduuser'
        }
    ];
    res.status(200).json(stuff);
})



module.exports = app;