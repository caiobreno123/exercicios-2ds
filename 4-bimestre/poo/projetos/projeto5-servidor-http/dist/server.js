"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor funcionando!");
});
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
