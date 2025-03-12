export const usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

export const f1=(a, b)=>a+b
const f2=(a, b)=>a-b

let nombre="Juana"



// module.exports={
//     usuarios, f1, f2, nombre
// }

export default class Villano{
    constructor(name, alias){
        this.name=name
        this.alias=alias
    }

    saludo(){
        console.log(`Hola, soy ${this.name}`)
    }
}

export {
    f2, nombre
}