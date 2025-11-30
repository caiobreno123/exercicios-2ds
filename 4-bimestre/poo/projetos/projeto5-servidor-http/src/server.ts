import * as http from "http";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor funcionando!");
  }
);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
