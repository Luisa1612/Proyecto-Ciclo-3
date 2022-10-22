const mysql = require("mysql")

class usuario {
    constructor(config){
    this.config=this.config;
    }

//Se recibe un correo y nombre, si no esta en la BD lo inserta
agregarUsuario(nombre, correo, celular, contraseña){
    var con = mysql.createConnection(this.config);
    con.connect(function(error){
        try{
            if(error){
                console.log("Error al establecer la conexion a la BD --" + error)
            }else{
                console.log("Conexion exitosa");
                con.query(`SELECT COUNT (*) AS USUARIO FROM USUARIOS WHERE correo = '${correo}'`, function(error, res, campo){
                    if(error){
                        console.log("Error en select BD --" + console.error());
                    }else{
                        console.log("Usuarios encontrados: " + res[0].usuario);
                        if(parseInt(res[0].usuario) == 0){
                            con.query("INSER INTO registro_clientes (nombre, correo, celular, contraseña) VALUES('${nombre}','${correo}','${celular}','{contraseña}')", function(error, res, campo)
                            {
                                if(error){
                                    console.log("Error al insertar nuevo usuario en la BD --" + console.error());
                                }else{
                                    console.log("Nuevo usuario registrado.");
                                }
                            });
                        }
                    }
                });
            }
        }catch(x){
            console.log("Contacto.agregarUsuario.connect --Error-- " + x);
        }
    });
}}