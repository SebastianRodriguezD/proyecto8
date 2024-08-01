const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Tiendas',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})

const uploadTiendas = multer({ storage })

module.exports = { uploadTiendas }
