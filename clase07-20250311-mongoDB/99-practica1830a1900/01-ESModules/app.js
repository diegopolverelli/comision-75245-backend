import Heroes from "./Heroes.js"
import Villanos, {nombre as name, f1 as suma, f2, usuarios} from "./varios.js"
import __dirname2 from "./utils.js"
import {promises as fsPromesas} from "fs"
import {join} from "path"


let h1=new Heroes("Robin", "D. Grayson")
h1.saludo()

console.log(suma(9,9))

let v1=new Villanos("Thanos", "-")
v1.saludo()

console.log(import.meta.dirname)

console.log(__dirname2)

let ruta=join(__dirname2, "archivos", "data.txt")
fsPromesas.readFile(ruta, "utf-8")
    .then(l=>console.log(l))
    .catch(e=>console.log("error... :("))