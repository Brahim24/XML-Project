<<<<<<< HEAD
var port_defaut = 8024;

var express = require('express'),
	exphbs = require('express-handlebars'),
	body_parser = require('body-parser'),
	routes = require('./routes/index'),
	mkdirp = require('mkdirp'),
	session = require('express-session');

mkdirp(__dirname + "/temp", function(err) {});
 
var app = express();
app.engine('.html', exphbs({defaultLayout: 'default_layout', extname: '.html'}));
app.set('view engine', '.html');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: 'keyboard cat',
  	truecookie: { maxAge: 60000 }, 
  	resave: false,
  	saveUninitialized: false
}));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(port_defaut);
console.log("Lancement du serveur : http://localhost:" + port_defaut + "/");

module.exports = app;
=======

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








>>>>>>> origin/master
