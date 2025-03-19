import mongoose from "mongoose"
export const conectarDB=async(uriMongoDB, dbName)=>{
    try {
        await mongoose.connect(
            uriMongoDB,
            {
                dbName: dbName
            }
        )
        console.log(`DB online!`)
    } catch (error) {
        console.log(`Error al conectar a DB... ${error.message}`)
    }
}