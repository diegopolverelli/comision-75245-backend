export default class Heroes{
    constructor(name, alias){
        this.name=name
        this.alias=alias
    }

    saludo(){
        console.log(`Hola, soy ${this.name}`)
    }
}

// module.exports=Heroes
