const { upload } = require('../../middlewares/file')
const {
  getMoviles,
  deleteMoviles,
  postMoviles,
  updateMoviles
} = require('../controllers/moviles')

const movilesRouter = require('express').Router()

movilesRouter.get('/', getMoviles)
movilesRouter.post('/', upload.single('img'), postMoviles)
movilesRouter.delete('/:id', deleteMoviles)
movilesRouter.put('/:id', upload.single('img'), updateMoviles)

module.exports = movilesRouter
