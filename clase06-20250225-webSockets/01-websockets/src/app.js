const express=require("express")
const {Server} =require("socket.io")
const {engine} = require("express-handlebars")
const heroesRouter=require("./routes/heroesRouter.js")
const viewsRouter=require("./routes/viewsRouter.js")

let io=undefined

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

// app.use('/api/heroes', heroesRouter)
app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.io=io

        next()
    },
    heroesRouter
)

app.use("/", viewsRouter)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/ofertas", (req, res)=>{
    let {oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`oferta es requerida`})
    }

    io.emit("oferta", oferta)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Oferta enviada...!!!"});
})

const serverHttp=app.listen(PORT,()=>{   // server es mi servidor HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

// const io=new Server(serverHttp) // server websocket montado sobre serverHttp
io=new Server(serverHttp) // server websocket montado sobre serverHttp

let temperatura=0
setInterval(() => {
    temperatura=Math.floor(Math.random()*(8)+26)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    io.emit("nuevaTemperatura", temperatura )
}, 1000);

// module.exports={io}