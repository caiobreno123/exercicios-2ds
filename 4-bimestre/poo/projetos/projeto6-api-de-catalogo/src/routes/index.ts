import express from "express"
import produtosRouter from "./produtos"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ nome: "Everson", idade: 34 })
})

router.get("/ping", (req, res) => {
  res.json({ pong: true })
})

router.use("/produtos", produtosRouter)

export default router