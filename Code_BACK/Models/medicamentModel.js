const mongoose = require('mongoose')

const medicamentSchema = mongoose.Schema(
    {
        nomMedic: {
            type: String, 
            required: true,
        },

        qtelMedic: {
            type: String, 
            required: true, 
        },

        typeMedic: {
            type: String,
            required: true, 
        }, 

    },

)

module.exports = mongoose('Medicament', medicamentSchema)