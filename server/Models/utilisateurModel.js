const mongoose = require("mongoose") 
 
// Roles : 
const Role = Object.freeze(["Admin","Pharmacie","Association","Patient"])

//Sexe : 
const Sexe = Object.freeze(["Homme","Femme"])

const utilisateurSchema = mongoose.Schema(
    {
        nom:{
            type: String, 
            required: true, 
        },
        prenom:{
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
        wilaya: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
            unique: true,
        },
        mot_de_passe: {
            type: String,
            required: true,
        },
        numtel: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            
            required: true,
            enum: Role,
          },

          resetKey: {
            type: String,
        }
    },
        { timestamps: true } 
)

const pharmacienSchema = mongoose.Schema(
    {   
        nomPharmacie:  {
            type: String,  
            required: true,
        },
        numPharmacie: {
            type: Number, 
            required: true,
        },
        wilayaPharmacie: {
            type: String, 
            required: true,
        },
        adressePharmacie: {
            type: String, 
            required: true,
        },
        fichierIDPharmacien: {
            type:String,
            required: true,
        },
        fichierIDPharmacie: {
            type:String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        }
    }
)

const associationSchema = mongoose.Schema(
    {   
        nomAsso: {
            type: String, 
            required: true,
        },
        numAsso: {
            type: Number, 
            required: true,
        },
        wilayaAsso: {
            type: String, 
            required: true,
        },
        adresseAsso: {
            type: String, 
            required: true,
        }, 
        fichierIDPresident: [
        {
            type:String,
            required: true,
        }
        ],
        fichierIDAssociation: [
        {
            type:String,
            required: true,
        }
        ], 
        isActive: {
            type: Boolean,
            default: false,
        }
    }
)

    const adminSchema = mongoose.Schema(
        {
            
        }
    )
    const patientSchema = mongoose.Schema(
        {

        }
    )

utilisateurSchema.set('discriminatorKey','role')
utilisateurSchema.discriminator ("Patient", patientSchema)
utilisateurSchema.discriminator ("Pharmacie", pharmacienSchema)
utilisateurSchema.discriminator ("Admin", adminSchema)
utilisateurSchema.discriminator ("Association", associationSchema)

module.exports = mongoose.model("Utilisateur", utilisateurSchema)