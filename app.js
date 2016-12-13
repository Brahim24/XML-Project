const PORT = 1337;
var http = require('http');
var https = require('https');

var request = require('request');



/*
SELECT ?mLabel ?image ?geo
WHERE
{
	?m wdt:P380 "Mérimée ID du monument".
  	?m wdt:P18 ?image.
    ?m wdt:P625 ?geo.
	SERVICE wikibase:label { bd:serviceParam wikibase:language "fr" }
}
*/

var id = "PA17000048"; 

var wikidata_json =  "https://query.wikidata.org/sparql?format=json&query=";

var wikidata_host = "https://query.wikidata.org";
var wikidata_path = "/sparql?format=json&query=";

//Generation de la requeteSPARQL
function genSPARQL(idMerim) {
    
    var sparql_startquery ='SELECT ?mLabel ?image ?geo WHERE { ?m wdt:P380 ';
    var sparql_endquery = '?m wdt:P18 ?image. ?m wdt:P625 ?geo. SERVICE wikibase:label { bd:serviceParam wikibase:language "fr" }}';

    return sparql_startquery + '"' + idMerim + '" ' + sparql_endquery;
}

// Path pour la requete GET sur wikidata :
var GET = wikidata_json;

// - Option requete
var options = {
    hostname: wikidata_host,
    path: wikidata_path + genSPARQL(id),
    method:'GET',
};



var server = http.createServer(function (req, res) {
   console.log("server");
    
   
       
});

server.listen(PORT);
console.log('Server running at http://localhost:1337/');

var getDatas = wikidata_json + genSPARQL("PA17000048");

var query = 'https://query.wikidata.org/sparql?format=json&query=SELECT ?image ?geo WHERE{?m wdt:P380 "PA17000048".?m wdt:P18 ?image.?m wdt:P625 ?geo.}';

console.log(getDatas);

   var datas;

   request(query, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    //All is good. Print the body
    console.log(body); // Show the HTML for the Modulus homepage.
    datas = body;
              
    });

    console.log("JSON");
    console.log(datas);

