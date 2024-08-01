const cloudinary = require('cloudinary').v2

const connectCl = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      api_key: process.env.CLOUDINARY_API_KEY
    })
    console.log('conectamos CL')
  } catch (error) {
    console.log('no se pudo conectar a CL')
  }
}

module.exports = { connectCl }
