import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: {
            type: String, 
            index: true
        }, 
        last_name: String,
        email: String, 
        gender: String, 
        code: Number
    },
    { 
        collection: 'bigUsers' 
    }
)

const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)

const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let usuarios=await usuariosModelo.find().explain("executionStats")
        // console.log(JSON.stringify(usuarios.executionStats, null, 5))
        // let usuarios=await usuariosModelo.find({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(usuarios.executionStats, null, 5))
        // let usuarios=await usuariosModelo.findOne({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(usuarios.executionStats, null, 5))
        let usuarios=await usuariosModelo.findOne({first_name:"Marcellina"}).explain("executionStats")
        console.log(JSON.stringify(usuarios.executionStats, null, 5))

        process.exit()
        
    } catch (error) {
        console.log(error.message)
    }
}

entorno()