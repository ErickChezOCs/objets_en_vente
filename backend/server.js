const http = require('http');
const server = http.createServer((req,res)=> {
    res.end('Le serveur ecoute au Port 3000');
});
server.listen(process.env.PORT || 3000);