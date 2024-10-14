import express from 'express';
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from 'path'
import mainRoutes from './routes/index';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config()

const server = express();

// Define o motor de templates que será usado para renderizar as views (Mustache)
server.set('view engine', 'mustache');

// Define o diretório onde as views (templates) estão localizadas
server.set("views", path.join(__dirname, "views"));

// Configura o Mustache como motor de templates
server.engine('mustache', mustache())

// Define o diretório para servir arquivos estáticos (CSS, JS, imagens) da pasta 'public'
server.use(express.static(path.join(__dirname, "../public")))

server.use(mainRoutes)

server.use((req, res)=>{
    res.send("página não encontrada!")
})

// Inicia o servidor na porta definida no arquivo .env (process.env.PORT)
server.listen(process.env.PORT)
