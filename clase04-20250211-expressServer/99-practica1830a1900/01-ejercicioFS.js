// 1) Crear un archivo llamado fecha.txt, cuyo contenido sean la fecha y
// hora actuales
// 2) recuperar el contenido de ese archivo y mostrarlo por pantalla

// Utilizar los métodos de fs que utilizan promesas

const fs=require("fs")
const {promises:fsPromesas} =require("fs")
const fsPromesas2=require("fs").promises

let fecha=new Date().toLocaleString()
// console.log(fecha)

// fs.promises.writeFile()
//     .then

const ejercicio=async()=>{
    await fsPromesas.writeFile("./fecha.txt", fecha)
    let datosLeidos=await fsPromesas.readFile("./fecha.txt", "utf-8")
    console.log(datosLeidos)
}

ejercicio()



