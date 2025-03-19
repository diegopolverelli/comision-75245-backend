import { productoModelo } from "./models/productosModelo.js";

export class ProductosMongoManager{
    static async get(){
        // return await productoModelo.find().sort({title-1}).lean()
        return await productoModelo.find().lean()
    }

    static async getBy(filtro={}){   // {stock:0}
        return await productoModelo.findOne(filtro).lean()
    }

    static async save(producto){
        // return await productoModelo.create(producto)
        let nuevoProducto=await productoModelo.create(producto)
        return nuevoProducto.toJSON()
    }

    static async update(id, aModificar){
        return await productoModelo.findByIdAndUpdate(id, aModificar, {new: true}).lean()
    }

    static async delete(id){
        // return await productoModelo.deleteOne({_id:id})
        return await productoModelo.findByIdAndDelete(id, {}).lean()
    }
}