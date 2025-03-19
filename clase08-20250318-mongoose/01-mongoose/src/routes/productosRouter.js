import { Router } from 'express';
import { procesaErrores } from '../utils.js';
// import { ProductosMongoManager as ProductosManager } from '../dao/ProductosMongoManager.js';
import { ProductosFSManager as ProductosManager } from '../dao/ProductosFSManager.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let productos=await ProductosManager.get()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({productos})
    } catch (error) {
        procesaErrores(error, res)
    }

})

router.post("/", async(req, res)=>{
    let {title, code, stock, price, thumbnails}=req.body
    if(!title || !code || !price){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`title | code | price son requeridos`})
    }

    // resto de validaciones pertinentes
    try {
        let existe=await ProductosManager.getBy({code})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe un producto con code ${code} en DB`})
        }

        let nuevoProducto=await ProductosManager.save({title, code, stock, price, thumbnails})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:"Producto generado!", nuevoProducto});
    } catch (error) {
        procesaErrores(error, res)
    }
})

router.put("/:id", async(req, res)=>{
    let aModificar=req.body
    let {id} = req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de MongoDB`})
    }
    // validaciones
    try {
        let productoModificado=await ProductosManager.update(id, aModificar)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productoModificado});
    } catch (error) {
        procesaErrores(error, res)
    }
})