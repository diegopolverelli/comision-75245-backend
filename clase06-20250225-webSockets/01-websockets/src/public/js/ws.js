// alert("desde wS")
const socket=io()
const divTemperatura=document.getElementById("temperatura")

socket.on("nuevaTemperatura", temperatura=>{
    // console.log(temperatura)
    divTemperatura.textContent=`Temperatura del nucleo: °${temperatura}`
})

socket.on("oferta", texto=>{
    alert(texto)
})

socket.on("nuevoHeroe", datoHeroe=>{
    console.log(datoHeroe)
    alert(`Se ha creado un nuevo heroe: ${datoHeroe.name}`)
})