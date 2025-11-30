import express from "express"
import helmet from "helmet"
import dotenv from "dotenv"
import path from "path"
import router from "../src/routes"

dotenv.config()

const appExpress = express()
const PORT = process.env.PORT || 3000

appExpress.use(helmet())
appExpress.use(express.json())
appExpress.use(express.urlencoded({ extended: true }))
appExpress.use(express.static(path.join(__dirname, "../public")))
appExpress.use("/", router)

const server = appExpress.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server