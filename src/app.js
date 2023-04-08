import express from "express"
import db from "./config/dbConnect.js"
import series from "./models/Serie.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
})

const app = express()

app.use(express.json())

/* const series = [
  {id: 1, "titulo": "The Nanny"},
  {id: 2, "titulo": "The 100"},
  {id: 3, "titulo": "Suits"},
  {id:4, "titulo": "Hometown Cha Cha Cha"}
] */

app.get('/', (req, res) => {
  res.status(200).send('Media Manager')
})

app.get('/series/:id', (req, res) => {
  let index = buscaSerie(req.params.id)
  res.json(series[index])
})

app.post('/series', (req, res) => {
  series.push(req.body)
  res.status(201).send('Série cadastrada com sucesso')
})

app.put('/series/:id', (req, res) => {
  let index = buscaSerie(req.params.id)
  series[index].titulo = req.body.titulo
  res.json(series)
})

app.delete('/series/:id', (req, res) => {
  let {id} = req.params
  let index = buscaSerie(id)
  series.splice(index, 1)
  res.send(`Série ${id} removida com sucesso`)
})

function buscaSerie(id){
  return series.findIndex(serie => serie.id == id)
}

export default app
