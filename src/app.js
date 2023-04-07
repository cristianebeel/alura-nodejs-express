import express from "express"

const app = express();
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

export default app
