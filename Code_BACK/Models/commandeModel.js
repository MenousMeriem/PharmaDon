
const mongoose  = require("mongoose");


const commandeSchema = mongoose.Schema(
    {
        idMedic:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Medicament",
            required: true,
        },
        idPatient:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Patient",
            required: true,
        },
        idPharmacie:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Pharmacien",
            required: true,
        },
        dateCom:{
            type: Date, 
            required: true,
        },
        livrer:{
            type: Boolean,
            required: true,
        },


    }
)

module.exports = mongoose.model('Commande', commandeSchema)