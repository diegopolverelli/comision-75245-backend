import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{
    let {page, limit}=req.query
    if(!page){
        page=1
    }
    if(!limit){
        limit=1
    }
    let {docs:usuarios, totalPages, hasNextPage, nextPage, hasPrevPage, prevPage}=await UsuariosManager.get(page, limit)

    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        usuarios, 
        totalPages, 
        hasNextPage, 
        hasPrevPage,
        nextPage, 
        prevPage,
        page, 
    })
})