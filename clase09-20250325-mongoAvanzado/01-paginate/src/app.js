import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from "mongoose"

import { router as usuariosRouter } from './routes/usuariosRouter.js';
import { router as vistasRouter } from './routes/viewsRouter.js';

const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use("/api/usuarios", usuariosRouter)
app.use("/", vistasRouter)

app.get("/",(req, res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"OK"});
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://comis75245:CoderCoder123@cluster0.sbnue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comis75245clase09')
    console.log(`Conexión a DB establecida`)
} catch (error) {
    console.log(`Error al conectar a DB`)
}

