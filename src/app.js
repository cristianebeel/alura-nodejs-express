import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

try{
  db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
  })
} catch(err) {
  db.on("error", console.log.bind(console, 'Erro de conexão'))
}

const app = express()
app.use(express.json())
routes(app)

export default app
