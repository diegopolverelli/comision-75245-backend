const fs=require("fs")

class UsersManager{
    constructor(rutaArchivo){
        this.path=rutaArchivo
    }

    async getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        }else{
            // throw new Error(`${this.path} not found...!!! :(`)
            return []
        }
    }

    async addUser(nombre, edad){
        let usuarios=await this.getUsers()

        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }

        // validaciones pertinentes... 

        let nuevoUsuario={
            id, 
            nombre, edad
        }

        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, "\t"))
        return nuevoUsuario
    }
}

let datos={
    dato01:100, 
    dato02:200
}

module.exports={
    UsersManager, 
    datos
}

