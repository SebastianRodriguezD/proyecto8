const mongoose = require('mongoose')
const movilSchema = new mongoose.Schema(
  {
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: Number, required: true },
    img: { type: String, trim: true, required: false }
  },
  {
    timestamps: true,
    collection: 'moviles'
  }
)

movilSchema.index({ img: 1, year: 1, title: 1 }, { unique: true }) // Ejemplo de índice único, para evitar duplicado.

const Moviles = mongoose.model('moviles', movilSchema, 'moviles')
module.exports = Moviles
