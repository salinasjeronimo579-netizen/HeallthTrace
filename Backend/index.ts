import express, { urlencoded } from "express";
import { CONN } from './src/config/database';
import type { Options } from "sequelize";

const app = express();
const PORT: number = 3000;
const SERVER : string = "localhost//:"
const URL: string = SERVER + PORT;

app.listen(PORT, ()=>{
    console.log("Servidor funcionando correctamente en la url: " + URL);
})
