const mongoose = require("mongoose") 
 
// Roles : 
const Role = Object.freeze(["Admin","Pharmacien","Benificiare","Donneur","Patient"])

//Sexe : 
const Sexe = Object.freeze(["Homme","Femme"])

const utilisateurSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
        }, 
        prenom: {
            type: String,
            required: true,
        },
        sexe: {
            type: String,
            required: true,
            enum: Sexe,
        },
        date_de_naissance: {
            type: Date,
            required: true,
        },
        adresse: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
            unique: true,
        },
        mail_conf: {
            type: String,
            required: true,
            unique: true,
        },
        mot_de_passe: {
            type: String,
            required: true,
        },
        num_tel1: {
            type: Number,
            required: true,
        },
        num_tel2: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: Role,
          },
    },
        { timestamps: true }
)
    

const patientSchema = mongoose.Schema(
    {
        numSec: {
            type: Number,
        }, 
        ordonnance: {
            type: Boolean,
        }
    }
)

const pharmacienSchema = mongoose.Schema(
    {
        nomPharm: {
            type: String,
        }, 
        adressePharm: {
            type: String,
        },
        listeMedic: {
            type: String,
        }
    }
)

const donneurSchema = mongoose.Schema(
    {
        nomDonneur: {
            type: String,
        }, 
    }
)

utilisateurSchema.set('discriminatorKey','Role')
utilisateurSchema.discriminator ("Patient", patientSchema)
utilisateurSchema.discriminator ("Pharmacien", pharmacienSchema)
utilisateurSchema.discriminator ("Donneur", donneurSchema)

module.exports = mongoose.model("Utilisateur", utilisateurSchema)