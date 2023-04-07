import app from './src/app.js'

//configura a porta no ambiente de produção OU na 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
