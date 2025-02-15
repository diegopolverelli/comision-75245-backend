const express=require("express")
const {UsersManager}=require("./dao/UsersManager.js")

const userManager=new UsersManager("./src/data/usuarios.json")

const PORT=3000

const app=express()

app.get("/", (req, res)=>{

    res.send("Home Page")
})


app.get("/usuarios", async(req, res)=>{

    let {limit}=req.query
    let usuarios=await userManager.getUsers()
    // const fs=require("fs")
    // fs.readFileSync()

    if(limit){
        limit=Number(limit)
        if(isNaN(limit)){
            return res.send("Error: ingrese un limit numérico")
        }

        // let a=[]
        // a.slic
        usuarios=usuarios.slice(0, limit)
    }

    res.send(usuarios)
})


app.listen(PORT, ()=>{
    console.log(`Server on line en puerto ${PORT}`)
})