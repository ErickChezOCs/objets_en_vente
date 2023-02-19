const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('reception req OK!');
    next();
})
app.use((req,res,next) => {
   console.log('second:reception req OK!numero2');
    next();
})
app.use((req,res,next) => {
    res.status(201);
     next();
 })

app.use((req,res) => {
    res.json({message:'Ceci est la troisième app.use()'});
});
module.exports = app;