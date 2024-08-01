const { uploadTiendas } = require('../../middlewares/fileTiendas')
const {
  getTiendas,
  postTiendas,
  deleteTiendas,
  updateTiendas
} = require('../controllers/tiendas')

const tiendasRouter = require('express').Router()

tiendasRouter.get('/', getTiendas)
tiendasRouter.post('/', uploadTiendas.single('img'), postTiendas)
tiendasRouter.delete('/:id', deleteTiendas)
tiendasRouter.put('/:id', uploadTiendas.single('img'), updateTiendas)

module.exports = tiendasRouter
