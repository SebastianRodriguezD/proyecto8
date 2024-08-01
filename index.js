require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const movilesRouter = require('./src/api/routes/moviles')
const tiendasRouter = require('./src/api/routes/tiendas')
const { connectCl } = require('./src/config/cloudinary')

const app = express()
connectDB()
connectCl()
const PORT = 8000
app.use(express.json())

app.use('/api/v1/moviles', movilesRouter)
app.use('/api/v1/tiendas', tiendasRouter)

app.use('/ping', (req, res, next) => {
  res.status(202).json('cachuca')
})
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(PORT, () => {
  console.log(`Servidor conectado en http://localhost:${PORT}`)
})
