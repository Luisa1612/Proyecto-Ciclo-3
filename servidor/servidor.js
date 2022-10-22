var express = require("express");
const usuario = require("../servidor/conexion") 

var delirium = express ();

delirium.get('/', function(req, res){
    res.send("Bienvenidos a DeliriumBakery es un gusto que estes aqui");
});

//La consola mostrara un mensaje "escuchando por el purto 3000"
delirium.listen(3000, function(){
    console.log("Escuchando por el puerto 3000!!");
});
