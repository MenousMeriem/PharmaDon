
const mongoose = require('mongoose')

const categorieSchema = mongoose.Schema(
    {
        nomCat: {
            type: String,
            required: true,
        }
    }
)

module.exports = mongoose.model('Categorie', categorieSchema)