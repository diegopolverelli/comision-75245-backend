import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async get(page=1, limit=10){
        return usuariosModelo.paginate({},{page, limit, lean:true})
    }
}