import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{
    let {page, limit}=req.query
    if(!page){
        page=1
    }
    if(!limit){
        limit=10
    }
    let {docs:usuarios, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage}=await UsuariosManager.get(page, limit)
    // console.log(usuarios.docs)
    
    res.render("usuarios",{
        usuarios, 
        totalPages, 
        hasNextPage, 
        nextPage, 
        hasPrevPage, 
        prevPage
    })
})