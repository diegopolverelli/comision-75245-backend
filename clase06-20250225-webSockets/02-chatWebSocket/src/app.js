const express=require("express")
const {Server} =require("socket.io")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{  // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

const io=new Server(server)   // server WebSocket

// io.emit() // emite el mensaje a todos los que estén conectados

io.on("connection", socket=>{
    console.log(`Se ha conectado un usuario con id ${socket.id}`)
    socket.emit("saludo", "Bienvenido...!!! identificate...")  // solo emite al que se acaba de conectar / enviar msg

    // socket.broadcast.emit()  // emito a todos, menos al que me acaba de enviar un msg 

    socket.on("nombre", nombre=>{
        console.log(`El usuario se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, datos)=>{
        io.emit("nuevoMensaje", nombre, datos)
    })
})
