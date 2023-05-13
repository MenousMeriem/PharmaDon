const mongoose = require('mongoose')
// Roles : 
// const Role = Object.freeze(["Pharmacien","Donneur"])

const annonceSchema = mongoose.Schema(
    {   
        // idPharmDon:{
        //     type: mongoose.SchemaTypes.ObjectId,
        //     required:true , reference ????????????
        //     enum: Role,
        // },


        
        idPharmacien:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Pharmacien",
            required: true,
        },

        idDonneur:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Donneur",
            required: true,
        },

        idMedic:{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Medicament",
            required: true,
        },

        date: {
            type: Date, 
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

    }
)

module.exports = mongoose.model('Annonce',annonceSchema)