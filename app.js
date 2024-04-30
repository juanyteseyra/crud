
const express = require ('express');
const conexion = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

// CREAMOS RUTAS 

// CREAMOS EL CRUD

//CREATE

router.post("/", async (req,res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

// READ DE TODOS LOS USUARIOS

router.get("/", async (req,res) => {
    const respuesta = await ModelUser.find({}) 
    res.send(respuesta)
})

//READ DE UN SOLO USUARIO

router.get("/:id", async (req,res)=> {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

//UPDATE

router.put ("/:id", async (req,res) =>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id},body)
    res.send(respuesta);
})

//DELETE
router.delete ("/:id", async (req,res) =>{
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndDelete({_id: id})
})

app.use(express.json())
app.use(router)
app.listen (8000, () => {
    console.log("El servridor está en el puerto 8000");
})

conexion();