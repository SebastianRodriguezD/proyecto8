const { deleteImgCloudinary } = require('../../utils/deleteMoviles')
const Moviles = require('../models/moviles')

const postMoviles = async (req, res, next) => {
  try {
    const newMovil = new Moviles(req.body)

    if (req.file) {
      newMovil.img = req.file.path
    }
    const movilesSaved = await newMovil.save()
    return res.status(201).json(movilesSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la creación')
  }
}

const getMoviles = async (req, res, next) => {
  try {
    const allMoviles = await Moviles.find()
    return res.status(200).json(allMoviles)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updateMoviles = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    if (req.file) {
      updateData.img = req.file.path
      const oldMovil = await Moviles.findById(id)
      deleteImgCloudinary(oldMovil.img)
    }
    const updatedCoche = await Moviles.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    if (!updatedCoche) {
      return res.status(404).json('Coche no encontrado')
    }

    return res.status(200).json(updatedCoche)
  } catch (error) {
    return res.status(400).json('ha fallado la actualización del coche')
  }
}

const deleteMoviles = async (req, res, next) => {
  try {
    const { id } = req.params

    // Encuentra el documento antes de eliminarlo
    const movil = await Moviles.findById(id)
    if (!movil) {
      return res.status(404).json('elemento no encontrado')
    }

    // Elimina el documento
    await Moviles.findByIdAndDelete(id)

    // Verifica que la propiedad img exista antes de intentar eliminarla en Cloudinary
    if (movil.img) {
      deleteImgCloudinary(movil.img)
    }

    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la eliminación del elemento')
  }
}

module.exports = {
  getMoviles,
  postMoviles,
  deleteMoviles,
  updateMoviles
}
