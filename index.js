// const express = require('express');
import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import proyectosRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";

const app = express();
app.use(express.json()); // antes se usaba body-parse, pero ya se intengró a express

dotenv.config();

conectarDB();

// Routing

// app.use('/', (req, res) => {
//     // res.send('Hola Mundo!!');
//     res.json({msg: 'ok'})
// })
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/proyectos', proyectosRoutes);
app.use("/api/tareas", tareaRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
