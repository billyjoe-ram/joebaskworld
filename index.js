require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('src/public'))

app.get('/', (req, res) => {
  return res
  .status(200)
  .sendFile(path.join(__dirname, '/src/public/index.html'))
})

app.listen(process.env.PORT, () => {
  console.log(`Server rodando na porta: ${process.env.PORT}`)
})