const mongoose = require('mongoose')

const tiendaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    contacto: { type: String, required: true },
    img: { type: String, trim: true, required: false },
    moviles: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'moviles',
        required: true,
        unique: true
      }
    ]
  },
  {
    timestamps: true,
    collection: 'tiendas'
  }
)

tiendaSchema.index(
  { nombre: 1, unicacion: 1, contacto: 1, img: 1, moviles: 1 },
  { unique: true }
)

const tiendas = mongoose.model('tiendas', tiendaSchema, 'tiendas')

module.exports = tiendas
