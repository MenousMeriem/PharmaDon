const mongoose = require('mongoose')

const categorie = Object.freeze(["Demande","Don"])
const raison = Object.freeze(
    ["Je pense que cette annonce pourrait être une tentative de vente illégale de médicaments, ce qui est contraire aux politiques de la plateforme", 
    "Cette annonce semble proposer des médicaments contrefaits ou de qualité douteuse, ce qui peut présenter des risques pour la santé des bénéficiaires.", 
    "Je crois que cette annonce viole les règles de votre plateforme en proposant des médicaments restreints ou interdits."]) 

const annonceSchema = mongoose.Schema(
    {   
        idAuteur: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Utilisateur",
        }, 
        idMedicament:[{
            type: mongoose.SchemaTypes.ObjectId, 
            required: true,     
            ref: "Medicaments"
        }],
        detail: {
            type: String, 
            required: true,
        },
        wilaya: {
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
        signalement: [{
            type: String,
            enum: raison  
        }],   
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('Annonce',annonceSchema)
