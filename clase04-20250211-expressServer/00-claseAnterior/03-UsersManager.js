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


const app=async()=>{
    const usersManager=new UsersManager("./archivos/usuarios.json")
    console.log(await usersManager.getUsers())
    
    console.log(await usersManager.addUser("Diego", 46))
    console.log(await usersManager.addUser("Romina", 39))
    console.log(await usersManager.addUser("Luisa", 28))
    
    console.log(await usersManager.getUsers())
}

app()