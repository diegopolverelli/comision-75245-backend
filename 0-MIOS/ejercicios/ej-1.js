// Descripción de la actividad. 
// Dados los siguientes objetos:
// - Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
// consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
// - Posteriormente, obtener el total de productos vendidos por todos los objetos 
// (utilizar Object.values)


const objetos=[
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]
//----------------------------------------------------------------------------------------------------------------------------------

//1
let listaNueva=[]

objetos.forEach(objeto=>{
    let keysObjeto = Object.keys(objeto)
    keysObjeto.forEach(o=>{
        if(!listaNueva.includes(o)){
            listaNueva.push(o)
        }
    })
})
console.log(listaNueva)

//2
    //no entendi

// si hay que contar x objeto la cantidad de produtos:
objetos.forEach(objeto=>{
    
    let cantidadPorObjetoArray = Object.values(objeto)
    console.log(cantidadPorObjetoArray)
    let cantidadPorObjeto = cantidadPorObjetoArray.reduce((acumulador, numero) => acumulador+numero,0)

    console.log('el objeto tiene '+cantidadPorObjeto+' productos')
    
})