const {Router}=require("express")
const {HeroesManager} =require("../dao/HeroesManager.js")
// const {io} =require("../app.js")
const router=Router()

// let heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    let heroes=HeroesManager.getAll()

    res.status(200).json({heroes})
})

router.get('/:id',(req,res)=>{

    let heroe=HeroesManager.getById(+req.params.id)

    res.status(200).json({heroe})
})

router.post("/",(req, res)=>{
    let {name, ...otros}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete name`})
    }

    let existe=HeroesManager.getByName(name)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe el heroe ${name}`})
    }

    try {
        let nuevoHeroe=HeroesManager.create({name, ...otros})
    
        req.io.emit("nuevoHeroe", nuevoHeroe)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json(nuevoHeroe);
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }
})


module.exports=router