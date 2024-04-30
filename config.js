// CONEXION A LA BASE DE DATOS

const mongoose = require ('mongoose');
const conexion = async () => {   //127.0.0.1  Nombre de la base de datos, configuraciones que podemos hacer
    //El mensaje de error indica que Mongoose.prototype.connect() ya no acepta un callback. Esto significa que no puedes pasar una función de callback a mongoose.connect().
    //Tuve que resolverlo con un async
    try {
        await mongoose.connect ("mongodb://127.0.0.1:27017/dbUsuarios", {});
        console.log ("Conexion correcta");
    }
    catch (error){
        console.log("Conexion incorrecta", error);
    }
}

module.exports = conexion;



