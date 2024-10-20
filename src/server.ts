import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
// importando routas
import mainRoutes from './routes/index';

dotenv.config();
const server = express();
server.set("view engine", "mustache");
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

//  Rotas
server.use(mainRoutes);

// routas para paginas nao encotradas
server.use((req, res)=>{
  res.send('pagina nao encotrada');
})


// Rodando o servidor
server.listen(4000);

