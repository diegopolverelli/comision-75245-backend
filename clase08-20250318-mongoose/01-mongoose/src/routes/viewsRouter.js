import { Router } from 'express';
// import { ProductosMongoManager as ProductosManager} from '../dao/ProductosMongoManager.js';
import { ProductosFSManager as ProductosManager} from '../dao/ProductosFSManager.js';
export const router=Router()

router.get('/productos',async(req,res)=>{

    let productos=await ProductosManager.get()
    console.log(productos)
    console.log(productos[0])
    let persona={
        nombre:"José", edad:38
    }
    console.log(Object.keys(persona))
    console.log(Object.keys(productos[0]))
    
    res.render("productos", {
        productos
    })
})