const Heroes=require("./Heroes.js")
const nombre=require("./varios.js").nombre
const {nombre:name} = require("./varios.js")
const {f1:suma, f2:resta, usuarios } = require("./varios.js")

const {join} =require("path")

const {promises:fsPromesas} = require("fs")

let h1=new Heroes("Batman", "B. Wayne")
h1.saludo()

console.log(nombre)
console.log(name)

console.log(resta(100, 20))

console.log(usuarios)

console.log(__dirname)

fsPromesas.readFile("./archivos/data.txt", "utf-8")  // ruta relativa
    .then(r=>console.log(r))
    .catch(e=>console.log(`error... :( - detalle: ${e.message}`))

console.log(__dirname+"/archivos/data.txt")   // ruta absoluta

fsPromesas.readFile(__dirname+"/archivos/data.txt", "utf-8")  // ruta relativa
    .then(r=>console.log(r))
    .catch(e=>console.log(`error... :( - detalle: ${e.message}`))  
    
console.log("CON JOIN:", join(__dirname, "archivos", "data.txt" ))