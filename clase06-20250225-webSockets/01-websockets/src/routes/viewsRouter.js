const { HeroesManager } = require('../dao/HeroesManager.js');

const Router=require('express').Router;
const router=Router()

// let heroesManager=new HeroesManager()

router.get('/pruebas',(req,res)=>{

    
    res.render("ejemplo")
})

router.get('/heroes',(req,res)=>{

    let heroes=HeroesManager.getAll()
    
    res.render("heroes", {
        heroes
    })
})


module.exports=router