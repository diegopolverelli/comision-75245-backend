// alert("123")
const socket=io()

socket.on("nuevoHeroe", ()=>{
    console.log("llego el evento nuevoHeroe...!!!")
    window.location.reload()
})