const express=require('express');
const { HeroesManager } = require('./dao/HeroesManager.js');
const { log, errorHandler } = require('./middlewares/errorHandler.js');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.use(log)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba',(req,res)=>{

    throw new Error("cod 100 - error de prueba...")


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/heroes", async(req, res)=>{
    let {name}=req.query
    let heroes=await HeroesManager.getHeroes()

    if(name){
        let heroe=heroes.find(h=>h.name.toLowerCase()==name.toLowerCase())
        if(!heroe){
            return res.send({
                error:`No existe ${name} en la DB`
            })
        }else{
            return res.send(heroe)
        }
    }

    res.send(heroes)
})

app.post("/heroes", (req, res)=>{

    console.log(req.body)
    let {name, alias} =req.body

    // validaciones y conexión al manager.addHeroe
    let id=Math.floor(Math.random()*(100)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    let heroe={id, name, alias}

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"heroe generado...!!!", heroe});

})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
