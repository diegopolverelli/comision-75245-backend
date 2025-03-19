import fs from "fs"

export class ProductosFSManager{
    static path="./src/data/productos.json"
    
    static async get(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, "utf8"))
        }else return []
    }
}