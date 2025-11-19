import { Router } from "express";
import produtosRouter from "./produtos";

const router = Router();

router.get("/ping", (req, res) => {
  return res.json({ pong: true });
});

router.get("/", (req, res) => {
  return res.json({ nome: "Seu Nome Aqui", idade: 18 });
});

router.use("/produtos", produtosRouter);

export default router;