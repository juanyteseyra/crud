const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        dni : {
            type: Number
        },
        edad : {
            type: Number
        }

    },
    //CONFIGURACIONS ADICIONALES
    {
        timestamps:true, //AGREGA DE FORMA AUTOMATICA LA FECHA DE CREACION Y MODIFICACION DE UNA COLECCION
        versionKey:false,
    }
)

const ModelUser = mongoose.model("usuarios",userModel );
module.exports = ModelUser;

