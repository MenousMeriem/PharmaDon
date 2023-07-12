const utilisateurModel = require("../Models/utilisateurModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const path = require('path')
const {Types} = require('mongoose')
const nodemailer = require('nodemailer')
const annonceModel = require("../Models/annonceModel")

//create gen access token
const genAccessToken = ({_id,role}) => {
return jwt.sign({_id, role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "100000h"})
}


//Créer un Admin :
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    if(req.body.role=='Admin'){
        const {nom, prenom, sexe, date_de_naissance, wilaya, adresse, numtel, mail, mot_de_passe, role} = req.body
        if(
          !nom ||
          !prenom ||
          !sexe ||
          !date_de_naissance||
          !adresse ||
          !wilaya ||
          !numtel|| 
          !mail ||
          !mot_de_passe
          ) {
          throw new Error('Veuillez remplir tout les champs ! ')
        }
        if((await utilisateurModel.find({mail})).length > 0) {
          throw new Error('Utilisateur existe')
        }
        const newUtilisateur = await utilisateurModel.create({
          nom, prenom, sexe, date_de_naissance, wilaya, adresse, numtel, mail, role,
          mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
        })
          return res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id, role: newUtilisateur.role}),
              role: "Admin"
          })
         
      }

      // Creer un pharmacien :
      else if(req.body.role=='Pharmacie') {
        const {nom, prenom, sexe, date_de_naissance, adresse, mail, numtel, wilaya, nomPharmacie, numPharmacie, 
          wilayaPharmacie, adressePharmacie, mot_de_passe, role} = req.body
            if(
              !nom ||
              !prenom ||
              !sexe ||
              !date_de_naissance ||
              !wilaya ||  
              !adresse || 
              !mail ||
              !numtel ||
              !nomPharmacie||
              !numPharmacie||
              !wilayaPharmacie || 
              !adressePharmacie||
              !mot_de_passe ||
              !role
           ) {             
             throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
              const newUtilisateur = await utilisateurModel.create({
              nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, nomPharmacie, numPharmacie, wilayaPharmacie, 
              adressePharmacie, role, fichierIDPharmacien: req.files[0].path,fichierIDPharmacie: req.files[1].path,
              mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
              })
              const transporter = nodemailer.createTransport({
              host: 'smtp.office365.com',
              port: 587,
              secure: false,
              auth: {
                  user: process.env.SMTP_Mail,
                  pass: process.env.SMTP_Pass
                  }
              });
        
              // send mail with defined transport object
              let info = await transporter.sendMail({
              from: process.env.SMTP_Mail, // sender address
              to: newUtilisateur.mail, // list of receivers
              subject: "En attente de validation de votre compte", // Subject line
              text: `Cher ${nom} ${prenom}, 
              nous vous remercions d'avoir soumis votre demande de création de compte sur notre plateforme PharmaDon. Nous souhaitons vous informer que votre demande est en cours de traitement et qu'elle nécessite une validation de la part de notre administrateur. 
              Cordialement.`, // plain text body
             })

         return res.status(201).json({
          _id: newUtilisateur._id,
          accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
          role: "Pharmacie"
        })
        
      }
        // Creer une association
        else if (req.body.role=='Association') {
          const {nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, nomAsso, numAsso, wilayaAsso, adresseAsso, 
                role, mot_de_passe} = req.body
            if(
               !nom ||
               !prenom||
               !sexe||
               !date_de_naissance||
               !wilaya ||
               !adresse || 
               !mail ||
               !numtel ||
               !nomAsso ||
               !numAsso ||
               !wilayaAsso ||
               !adresseAsso ||
               !role ||
               !mot_de_passe
              ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, nomAsso, numAsso, wilayaAsso, adresseAsso, role,
              fichierIDPresident: req.files[0].path, fichierIDAssociation : req.files[1].path,
              mot_de_passe: await bcrypt.hash(mot_de_passe, 10),
            })

              const transporter = nodemailer.createTransport({
              host: 'smtp.office365.com',
              port: 587,
              secure: false,
              auth: {
                  user: process.env.SMTP_Mail,
                  pass: process.env.SMTP_Pass
                  }
              });
        
              // send mail with defined transport object
              let info = await transporter.sendMail({
              from: process.env.SMTP_Mail, // sender address
              to: newUtilisateur.mail, // list of receivers
              subject: "En attente de validation de votre compte", // Subject line
              text: `Cher ${nom} ${prenom}, 
              nous vous remercions d'avoir soumis votre demande de création de compte sur notre plateforme PharmaDon. Nous souhaitons vous informer que votre demande est en cours de traitement et qu'elle nécessite une validation de la part de notre administrateur. 
              Cordialement.`, // plain text body
             })

           return res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
              role: "Association"
            })

            // Creer un Patient 
          } 
            else (req.body.role=='Patient') 
            const {nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, role, mot_de_passe} = req.body
            if(
              !nom ||
              !prenom ||
              !sexe ||
              !date_de_naissance||
              !wilaya ||
              !adresse || 
              !mail ||
              !numtel ||
              !role ||
              !mot_de_passe
               ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
              const newUtilisateur = await utilisateurModel.create({
              nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, role,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })

              const transporter = nodemailer.createTransport({
              host: 'smtp.office365.com',
              port: 587,
              secure: false,
              auth: {
                  user: process.env.SMTP_Mail,
                  pass: process.env.SMTP_Pass
                  }
              });
        
              // send mail with defined transport object
              let info = await transporter.sendMail({
              from: process.env.SMTP_Mail, // sender address
              to: newUtilisateur.mail, // list of receivers
              subject: "En attente de validation de votre compte", // Subject line
              text: `Cher ${nom} ${prenom}, 
              nous vous remercions d'avoir soumis votre demande de création de compte sur notre plateforme PharmaDon. Nous souhaitons vous informer que votre demande est en cours de traitement et qu'elle nécessite une validation de la part de notre administrateur. 
              Cordialement.`, // plain text body
             })

            return res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
              role: "Patient",
            })
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


//Afficher l'utilisateur actuel
exports.afficherUtilisateur = expressAsyncHandler(async (req,res) => {
  try {
    const id = req.user._id
    const user = await utilisateurModel.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

//Afficher l'admin 
exports.afficherAdmin = expressAsyncHandler(async (req,res) => {
  try {
    const id = req.user._id
    const user = await utilisateurModel.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// Modifier les informations de l'admin : 
exports.modifierAdmin = expressAsyncHandler(async (req, res) => {
  try {
      const id = req.user._id
      const role = req.user.role
      const _id = new Types.ObjectId(id)
      await utilisateurModel.findOneAndUpdate({_id, role}, req.body)
      res.status(200).json("Utilisateur modifié !!")
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

// Afficher toutes les pharmacies : 
exports.afficherPharmacie = expressAsyncHandler(async (req, res) => {
  try { 
      const Pharmacie = await utilisateurModel.find({role:'Pharmacie'}).select('-mot_de_passe')
      res.status(202).json(Pharmacie) 
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// Afficher toutes les associations : 
exports.afficherAssociation = expressAsyncHandler(async (req, res) => {
  try {
      const Association = await utilisateurModel.find({role:'Association'}).select('-mot_de_passe')
      res.status(202).json(Association)
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// Modifier un utilsateur : 
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
      const id = req.user._id
      const role = req.user.role
      const _id = new Types.ObjectId(id)
      await utilisateurModel.findOneAndUpdate({_id, role}, req.body)
      res.status(200).json("Utilisateur modifié !!")
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})


// l'utilisateur désactive son compte :
exports.autoSupression = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
        await utilisateurModel.findOneAndUpdate(id, {isActive: false})
        res.status(202).json("Compte désactivé !")
    } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


// Affichage des utilisateurs pour l'admin :
exports.afficherTsUtilisateurs = expressAsyncHandler(async (req, res) => {
  try {
    const user = await utilisateurModel.find({role:{$ne:'Admin'}})
     res.status(202).json(user)
  } catch (error) {
    res.status(400)
  }
})


// Suppression d'un utilisateur par l'admin : 
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
      const { id } = req.params
      // supprime toutes les annonces de cet utilisateur
        await utilisateurModel.findByIdAndDelete(id)
        await annonceModel.deleteMany({idAuteur: id})
            res.status(202).json("Utilisateur supprimé !! ")
    } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})

