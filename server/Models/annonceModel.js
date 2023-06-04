const mongoose = require('mongoose')

const annonceSchema = mongoose.Schema(
    {   
        idAuteur:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Utilisateur",
            required: true,
        },
        numTel: {
            type: Number, 
            required: true, 
        },
        adresse: {
            type: String, 
            required: true, 
        },
        detail: {
            type: String, 
            required: true,
        },
        signalement: {
            type: Number,
        }
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('Annonce',annonceSchema)