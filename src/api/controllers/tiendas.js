const { deleteImgCloudinary } = require('../../utils/deleteMoviles')
const tiendas = require('../models/tiendas')

const postTiendas = async (req, res, next) => {
  try {
    const { nombre, ubicacion, contacto, moviles } = req.body

    // Eliminar IDs duplicados
    const uniqueMovilesIds = [...new Set(moviles)]

    // Verificar si alguno de las tiendas ya está asociado con otra tiendas
    const existingTienda = await tiendas.findOne({
      moviles: { $in: uniqueMovilesIds }
    })
    if (existingTienda) {
      return res
        .status(400)
        .json('Uno o más moviles ya están asociados a otra tienda')
    }

    const newTienda = new tiendas({
      nombre,
      ubicacion,
      contacto,
      moviles: uniqueMovilesIds
    })
    if (req.file) {
      newTienda.img = req.file.path
    }
    const tiendaSaved = await newTienda.save()
    return res.status(201).json(tiendaSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la creación')
  }
}

const getTiendas = async (req, res, next) => {
  try {
    const allTiendas = await tiendas.find().populate('moviles')
    return res.status(200).json(allTiendas)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const getTiendasId = async (req, res, next) => {
  try {
    const { id } = req.params
    const tiendasId = await tiendas.findById(id).populate('moviles')
    return res.status(200).json(tiendasId)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updateTiendas = async (req, res, next) => {
  try {
    const { id } = req.params

    // Obtener la tienda actual
    const currentTienda = await tiendas.findById(id)
    if (!currentTienda) {
      return res.status(404).json('Tienda no encontrada')
    }

    // Procesar imagen si se proporciona una nueva
    if (req.file) {
      // Guardar la nueva ruta de la imagen en el cuerpo de la solicitud
      req.body.img = req.file.path

      // Eliminar la imagen anterior de Cloudinary
      if (currentTienda.img) {
        await deleteImgCloudinary(currentTienda.img)
      }
    }

    // Verificar si se proporcionan moviles y procesarlos
    if (req.body.moviles) {
      // Eliminar IDs duplicados
      const uniqueMovilIds = [...new Set(req.body.moviles)]

      // Verificar si alguno de los moviles ya está asociado con otra tienda diferente
      const existingTienda = await tiendas.findOne({
        _id: { $ne: id },
        moviles: { $in: uniqueMovilIds }
      })
      if (existingTienda) {
        return res
          .status(400)
          .json('Uno o más moviles ya están asociados a otra tienda')
      }

      // Actualizar moviles en la libreria
      currentTienda.moviles = uniqueMovilIds
    }

    // Actualizar solo los campos proporcionados
    if (req.body.nombre !== undefined) {
      currentTienda.nombre = req.body.nombre
    }
    if (req.body.ubicacion !== undefined) {
      currentTienda.ubicacion = req.body.ubicacion
    }
    if (req.body.contacto !== undefined) {
      currentTienda.contacto = req.body.contacto
    }
    if (req.body.img !== undefined) {
      currentTienda.img = req.body.img
    }

    // Guardar la tienda actualizada en la base de datos
    const updatedTienda = await currentTienda.save()

    return res.status(200).json(updatedTienda)
  } catch (error) {
    console.error(error)
    return res.status(400).json('Ha fallado la actualización')
  }
}

const deleteTiendas = async (req, res, next) => {
  try {
    const { id } = req.params
    const tienda = await tiendas.findById(id)
    if (!tienda) {
      return res.status(404).json('elemento no encontrado')
    }

    await tiendas.findByIdAndDelete(id)

    if (tienda.img) {
      await deleteImgCloudinary(tienda.img)
    }

    return res.status(200).json('tienda eliminada')
  } catch (error) {
    console.error(error)
    return res.status(400).json('ha fallado la eliminación de la tienda')
  }
}

module.exports = {
  getTiendas,
  getTiendasId,
  postTiendas,
  updateTiendas,
  deleteTiendas
}
