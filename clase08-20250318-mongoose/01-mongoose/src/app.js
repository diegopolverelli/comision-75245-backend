import express from 'express';
import { conectarDB } from './connDB.js';
import { config } from './config/config.js';
import { router as productosRouter } from './routes/productosRouter.js';
import { router as vistasRouter } from './routes/viewsRouter.js';
import {engine} from "express-handlebars"
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/productos", productosRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

conectarDB(
    config.MONGO_URL,
    config.DB_NAME
)
