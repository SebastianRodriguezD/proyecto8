const cloudinary = require('cloudinary').v2

const deleteImgCloudinary = async (imgUrl) => {
  const imgSplited = imgUrl.split('/')
  const nameSplited = imgSplited.at(-1).split('.')[0]
  const folderSplited = imgSplited.at(-2)
  const public_id = `${folderSplited}/${nameSplited}`

  try {
    await cloudinary.uploader.destroy(public_id)
    console.log('Imagen eliminada')
  } catch (error) {
    console.error('Error eliminando la imagen:', error)
  }
}
module.exports = { deleteImgCloudinary }
