const expressAsyncHandler = require('express-async-handler')
const annonceModel = require('../Models/annonceModel')


//Ajouter une annonce : 
exports.ajouterAnnonce = expressAsyncHandler (async (req, res) => {
    try {
        const { 
          numTel, adresse, detail, nomMedicament, categorie} = req.body
          console.log(req.body)
      if (
        !numTel ||
        !adresse ||
        !detail ||
        !nomMedicament || 
        !categorie      
      ) {
        res.status(400)
        throw new Error("Remplissez vos champs SVP")
      }
        await annonceModel.create({
          idAuteur: req.user._id,
          numTel,
          adresse,
          detail,
          nomMedicament,
          categorie,
          image: req.files.length ? req.folder
          +"/"+req.files[0].filename : ""
        })
        res.status(201).json('Annonce ajoutée !!')
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})


// Modifier une annonce :  
exports.modifierAnnonce = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.user._id
    const idAnnonce = req.params.id
      await annonceModel.findOneAndUpdate({idAuteur: id,_id: idAnnonce}, req.body)
      res.status(201).json('Annonce modifiée')    
    } catch (error) {
      res.status(400).json({ message: "La modification de l'annonce a échoué.", error: error })
    }
})


// Supprimer sa propre annonce :
exports.supprimerAnnonce = expressAsyncHandler(async (req, res) => {
  try {
    const idAnnonce = req.params.id
    await annonceModel.findByIdAndDelete(idAnnonce)
    res.status(201).json("Annonce supprimé ")
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

// Supprimer une annonce par l'admin : 









// Afficher toutes les annonces : //Admin 
exports.afficherAnnonce = expressAsyncHandler(async(req,res) => {
  try {
      const annonce = await annonceModel.find()
      console.log(req.annonce)
      res.status(201).json(annonce)
  } catch (error) {
      res.status(400)
      console.log(error)
  } 
})


// Afficher les annonces de l'utilisateur courant : 
exports.afficherAnnonceUserCourant = expressAsyncHandler(async(req,res) => {
  try {
    const id = req.user._id
    console.log(id)
    const annonce = await annonceModel.find({idAuteur: id})  
    console.log(annonce)
    res.status(201).json(annonce) 
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


// Afficher les annonces des Pharmacies : 
exports.afficherAnnoncePharmacien = expressAsyncHandler(async(req,res) => {
  try {        
     const annonce = await annonceModel.find({idAuteur: req.params.id}).populate('idAuteur')
     const filteredResult = annonce.filter(an => an.idAuteur.role === "Pharmacie")
     res.status(202).json(filteredResult)
  } catch (error) {
    res.status(400)

  }
})

// Afficher les annonces des associations : 
exports.afficherAnnonceAssociation= expressAsyncHandler(async(req,res) => {
  try {
     const annonce = await annonceModel.find({idAuteur: req.params.id}).populate('idAuteur')
     const filteredResult = annonce.filter(an => an.idAuteur.role === "Association")
     res.status(202).json(filteredResult)
  } catch (error) {
      res.status(400)
  }
})


// Afficher les annonces des patients :
exports.afficherAnnoncePatient = expressAsyncHandler(async(req,res) => {
  try {
      const annonce = await annonceModel.find({idAuteur: req.params.id}).populate('idAuteur')
      const filteredResult = annonce.filter(an => an.idAuteur.role === "Patient")
      res.status(202).json(filteredResult)
  } catch (error) {
      res.status(400)
  }
})


// Signalement 
exports.signalerAnnonce = expressAsyncHandler(async(req, res) => {
  try {
    const {id, raison} = req.body
    await annonceModel.findByIdAndUpdate(id,{$push: {signalement: raison}} )
  } catch (error) {
    res.status(400)
  }
})