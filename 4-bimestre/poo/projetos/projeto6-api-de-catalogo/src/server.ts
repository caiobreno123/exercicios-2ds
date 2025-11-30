import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", router);

const app = server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

app.close(() => {
  console.log("Servidor encerrado.");
});

export default server;