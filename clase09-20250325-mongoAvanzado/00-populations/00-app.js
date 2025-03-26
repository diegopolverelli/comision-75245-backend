import mongoose from "mongoose"

try {
   await mongoose.connect(
    "mongodb+srv://comis75245:CoderCoder123@cluster0.sbnue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis75245clase09"
   )
   console.log("DB Online!") 
} catch (error) {
    console.log(`Error al conectar DB`)
}

const cursosModelo=mongoose.model(
    "cursos",
    new mongoose.Schema(
        {
            nombre: String, 
            docente: String,
            horas: Number
        },
        {
            timestamps: true
        }
    )
)

const alumnosModelo=mongoose.model(
    "alumnos",
    new mongoose.Schema(
        {
            nombre: String,
            email: {
                type: String,
                unique: true
            },
            cursando: {  // products
                type:[
                    {
                        curso: {    // 0098adf0000adfasdf0asdf0   - product
                            type: mongoose.Types.ObjectId,
                            ref: "cursos"  // nombre del modelo donde existe el curso
                        },
                        notaPromedio: Number    // quantity
                    }
                ]
            },
            domicilio: String
        },
        {
            timestamps:true
        }
    )
)

// let curso01=await cursosModelo.create({nombre:"Matemática Discreta II", docente:"Mariana Segovia", horas:38})
// let curso02=await cursosModelo.create({nombre:"Probabilidad y estadística", docente:"Carlos Peralta", horas:26})

// let alumno01=await alumnosModelo.create(
//     {
//         nombre: "Carolina Lopez", 
//         email:"carolina@test.com", 
//         cursando:[
//             {
//                 curso: curso01._id, 
//                 notaPromedio: 7
//             },
//             {
//                 curso: curso02._id, 
//                 notaPromedio: 6
//             }
//         ]
//     }
// )

let cursos=await cursosModelo.find().lean()
console.log(cursos)
let alumno01=await alumnosModelo.findOne().populate("cursando.curso").lean()   // "products.product"
console.log(JSON.stringify(alumno01, null, 5))