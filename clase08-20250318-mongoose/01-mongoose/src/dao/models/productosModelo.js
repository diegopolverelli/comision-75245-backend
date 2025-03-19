import mongoose from "mongoose";

const productosSchema=new mongoose.Schema(
    {
        title: String, 
        code: {
            type: String, 
            required: true, 
            unique: true
        },
        price: Number, 
        stock: {
            type: Number, 
            default: 0
        }, 
        thumbnails: []
    },
    {
        timestamps: true, 
        strict: false,
        // collection: "productos2023"
    }
)

export const productoModelo=mongoose.model(
    "productos",    // nombre en singular, la collection en DB se genera con el plural
    productosSchema
)

