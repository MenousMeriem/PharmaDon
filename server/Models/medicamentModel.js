const {Schema, model, SchemaTypes} = require('mongoose')

const medicamenSchema = new Schema({
    nomMedicament: {
        type: String,
        required: true
    },
    proprietaire: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Utilisateur"
    },
    idAnnonce: {
        type: SchemaTypes.ObjectId,
        ref: "Annonce"
    },
    image: {
        type:String,
    },
    
})

module.exports = model("Medicaments",medicamenSchema)
