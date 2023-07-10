const mongoose = require('mongoose')

const categorie = Object.freeze(["Demande","Don"])
const raison = Object.freeze(["raison1", "raison2", "raison3"])

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
        // image: {
        //     type:String,
        // },
        signalement: [{
            type: String,
            enum: raison  
        }]
        
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('Annonce',annonceSchema)
