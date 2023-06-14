const utilisateurModel = require("../Models/utilisateurModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const path = require('path')

//create gen access token
const genAccessToken = ({_id,role}) => {
return jwt.sign({_id, role}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "100000h"})
}


//Créer un Admin :
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.file)
    if(req.body.role=='Admin'){
        const {nom, prenom, sexe, date_de_naissance, adresse, numtel, mail, mot_de_passe, role} = req.body
        if(
          !nom ||
          !prenom ||
          !sexe ||
          !date_de_naissance||
          !adresse ||
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
          nom, prenom, sexe, date_de_naissance, adresse, numtel, mail, role,
          mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
        })
          console.log(newUtilisateur)
            res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
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
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
        res.status(201).json({
          _id: newUtilisateur._id,
          accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
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
            console.log(req.body)
            const newUtilisateur = await utilisateurModel.create({
              nom, prenom, sexe, date_de_naissance, wilaya, adresse, mail, numtel, nomAsso, numAsso, wilayaAsso, adresseAsso, role,
              fichierIDPresident: req.files[0].path, fichierIDAssociation : req.files[1].path,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
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
            res.status(201).json({
              _id: newUtilisateur._id,
              accessToken: genAccessToken({_id: newUtilisateur._id,role: newUtilisateur.role}),
            })
        
    } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


// Afficher tous les utilisateurs
exports.afficherTsUtilisateurs = expressAsyncHandler(async (req, res) => {
  try {
    const user = await utilisateurModel.find()
     res.status(202).json(user)
  } catch (error) {
    res.status(400)
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
      await utilisateurModel.findByIdAndUpdate(id, req.body)
      res.status(200).json("Utilisateur modifié !!")
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

// Supprimer un utilisateur : 
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const { id } = req.params
            await utilisateurModel.findByIdAndDelete(id)
            res.status(202).json("Utilisateur supprimé !! ")
    } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})

// l'utilisateur supprime son compte :
exports.autoSupression = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
        await utilisateurModel.findByIdAndDelete(id)
        res.status(202).json("Compte supprimé !")
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})
