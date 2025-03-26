import mongoose from 'mongoose';
import { mongourl } from './utils.js';

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre: String, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  }, {collection:'bigAlumnos'})

// alumnoEsquema.index({nombre: "asc"})
// alumnoEsquema.index({nombre: "asc", apellido: "desc"})



let alumnoModelo=mongoose.model('alumnos', alumnoEsquema)


const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let alumnos=await alumnoModelo.find().explain("executionStats")
        // console.log(JSON.stringify(alumnos.executionStats, null, 5))
        // let alumnos=await alumnoModelo.find({nombre:"Morena"}).explain("executionStats")
        // console.log(JSON.stringify(alumnos.executionStats, null, 5))
        let alumnos=await alumnoModelo.findOne({nombre:"Domingo"}).explain("executionStats")
        console.log(JSON.stringify(alumnos.executionStats, null, 5))



        process.exit()

    } catch (error) {
        console.log(error.message)
    }

}

entorno()