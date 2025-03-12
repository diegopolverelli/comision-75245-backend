const log=(req, res, next)=>{
    console.log("hola desde un middleware...!!!")

    next()
}

const errorHandler=(error, req, res, next)=>{
    console.log("algo ocurrió...!!! detalle:", error.message);
    res.setHeader('Content-Type','application/json');
    return res.status(500).json(
        {
            error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            // detalle:`${error.message}`
        }
    )
}

module.exports={log, errorHandler}


