const mongoose = require("mongoose") 
 
// Roles : 
const Role = Object.freeze(["Admin","Pharmacie","Association","Patient"])

//Sexe : 
const Sexe = Object.freeze(["Homme","Femme"])

const utilisateurSchema = mongoose.Schema(
    {
        adresse: {
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
        num_tel: {
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
    


const adminSchema = mongoose.Schema(
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
    }
)


const pharmacienSchema = mongoose.Schema(
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
        fichier: [
             {
                type:String,
                required: true,
             }
        ],
        adresseMailPharmacie: {
            type: String, 
            require: true
        },
        adressePharmacie: {
            type: String, 
            required: true,
        },
        numeroPharmacie:{
            type: String, 
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        }
    }
)

const patientSchema = mongoose.Schema(
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
    }
)

const associationSchema = mongoose.Schema(
    {
        nomAssociation:{
            type: String, 
            required: true, 
        },
        nomPresientAssociation:{
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

utilisateurSchema.set('discriminatorKey','Role')
utilisateurSchema.discriminator ("Patient", patientSchema)
utilisateurSchema.discriminator ("Pharmacien", pharmacienSchema)
utilisateurSchema.discriminator ("Admin", adminSchema)
utilisateurSchema.discriminator ("Association", associationSchema)

module.exports = mongoose.model("Utilisateur", utilisateurSchema)