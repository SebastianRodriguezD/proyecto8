const mongoose = require('mongoose')
const Moviles = require('../../api/models/moviles')
const moviles = require('../../data/moviles')

mongoose
  .connect(
    'mongodb+srv://sebastianrodriguezd:8BnuVYQU5IC4kSeB@proyecto8.l4doksm.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto8'
  )
  .then(async () => {
    const allMoviles = await Moviles.find()
    if (allMoviles.length) {
      await Moviles.collection.drop()
      console.log('Moviles eliminados')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Moviles.insertMany(moviles)
    console.log('Moviles Introducidos')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect(console.log('desconectado de la bbdd')))
