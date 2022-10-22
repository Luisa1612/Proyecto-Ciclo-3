//Cargar el modulo HTTP
var http = require ("http");

//configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response){
    console.log("Peticion realizada.");
    response.writeHead(200, {"content-Type": "text/html"});
    response.write("Configuracion del servidor para DELIRIUMBAKERY realizada con exito");
    response.end();
}
var server = http.createServer(onRequest);

//Escuchando en el puerto 8080
server.listen(8081);