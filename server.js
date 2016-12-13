
//ajout des librairie
var exist = require('easy-exist');
var http = require('http');
const PORT=8081;
const PORT2 = 8080;

//-----------------Base de données --------------
// create session
var client = new exist.DB('http://localhost:8080', {
    username: "admin",
    password: "admin"
});


//-----------------Serveur ----------------------
function onRequest(request, response) {
	response.end("Le début de la fin")
}
// creation du serveur
var httpServer = http.createServer(onRequest);

httpServer.listen(1338);








