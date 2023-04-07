import express from "express"

const app = express()

app.use(express.json())

const series = [
  {id: 1, "titulo": "The Nanny"},
  {id: 2, "titulo": "The 100"},
  {id: 3, "titulo": "Suits"},
  {id:4, "titulo": "Hometown Cha Cha Cha"}
]

app.get('/', (req, res) => {
  res.status(200).send('Media Manager')
})

app.get('/series', (req, res) => {
  res.status(200).json(series)
})

app.post('/series', (req, res) => {
  series.push(req.body)
  res.status(201).send('Série cadastrada com sucesso')
})

export default app
