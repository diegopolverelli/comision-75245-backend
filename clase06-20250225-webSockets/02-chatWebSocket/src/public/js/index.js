let nombre=prompt("Ingrese su nombre")
document.title=nombre
const socket=io()
const divMensajes=document.getElementById("mensajes")
const inputMensaje=document.getElementById("mensaje")
inputMensaje.focus()

socket.on("saludo", mensaje=>{
    console.log(mensaje)

    if(nombre){
        socket.emit("nombre", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha conectado al servidor...!!!`)
})

socket.on("nuevoMensaje", (nombre, mensaje)=>{
    let parrafo=document.createElement("p")
    // parrafo.textContent=`` 
    parrafo.innerHTML=`<b>${nombre}</b> dice: <i>${mensaje}</i>` 
    parrafo.classList.add("mensaje")
    divMensajes.append(parrafo)
})

inputMensaje.addEventListener("keyup", e=>{
    e.preventDefault()
    // console.log(e, e.target.value)    
    if(e.code=="Enter" && e.target.value.trim().length>0){
        // console.log("entro")
        socket.emit("mensaje", nombre, e.target.value.trim())
        e.target.value=""
        e.target.focus()
    }
})

