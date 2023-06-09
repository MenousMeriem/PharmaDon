const mongoose = require('mongoose')

const categorie = Object.freeze(["Demande","Donnation"])

const annonceSchema = mongoose.Schema(
    {   
        idAuteur: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Utilisateur",
        },
        titre: {
            type: String, 
            required: true,     
        },
        detail: {
            type: String, 
            required: true,
        },
        adresse: {
            type: String, 
            required: true, 
        },
        numTel: {
            type: Number, 
            required: true, 
        },
        categorie: {
            type: String, 
            required: true,
            enum: categorie,
        },
        signalement: {
            type: Number,
        }
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('Annonce',annonceSchema)