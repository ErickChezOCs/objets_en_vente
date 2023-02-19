const express = require('express');

const app = express();
/*app.use( 'url ou end point en premier argument) l'application frontend
fait une requête sur cette route pour recevoir une réponse contenant la
variable stuff ici définie */
app.use('/api/stuff',(req,res,next) => {
    const stuff = [
        {
         _id :'leid1',
         title : 'mon obje1',
         description : 'les infos sur objet1',
         imageUrl : 'lurl de objet1',
         price : 4900,
         userId : 'lidduuser'
        },
        {
            _id :'leid2',
            title : 'mon obje2',
            description : 'les infos sur objet2',
            imageUrl : 'lurl de objet2',
            price : 2900,
            userId : 'lidduuser'
        }
    ];
    res.status(200).json(stuff);
})

module.exports = app;