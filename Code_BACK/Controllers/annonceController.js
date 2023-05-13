const expressAsyncHandler = require('express-async-handler')
const annonceModel = require('../Models/annonceModel')


//Ajouter une annonce pour un Pharmacien  : 
exports.ajouterAnnoncePharm = expressAsyncHandler (async (req, res) => {
    try {
        const {date, numTel, adresse, detail, idMedic} =
        req.body
      if (
        !date ||
        !numTel ||
        !adresse ||
        !detail       
      ) {
        res.status(400).json(" L'annonce n'existe pas !!")
      }
            await annonceModel.create({
                idPharmacien: req.user._id, 
                idMedic,
                date,
                numTel,
                adresse,
                detail,
            })
                res.status(201).json('Annonce ajoutée !! ')

    } catch (error) {
        res.status(400)
        console.log(error)
    }
})


//Ajouter une annonce pour un Donneur: 
exports.ajouterAnnonceDon = expressAsyncHandler (async (req, res) => {
    try {
        const {date, numTel, adresse, detail, idMedic} =
        req.body
      if (
        !date ||
        !numTel ||
        !adresse ||
        !detail      
      ) {
        res.status(400).json("L'annonce n'existe pas !!")
      }
            await annonceModel.create({
                idDonneur: req.user._id, /// Soit ca
                idMedic,
                date,
                numTel,
                adresse,
                detail,
            })
                res.status(201).json('Annonce ajoutée !! ')

    } catch (error) {
        res.status(400)
        console.log(error)
    }
})


// Modifier une annonce pour un Pharmacien 
exports.modifierAnnoncePharm = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const {date, numTel, adresse, detail, idMedic} = req.body
  
    const resultat = await annonceModel.findByIdAndUpdate(id, req.body)
    if (!resultat) {
      return res.status(404).json({ message: "L'annonce n'existe pas" })
    }
    res.status(200).json({ message: "L'annonce a été modifiée avec succès."})
    
    } catch (error) {
      res.status(400).json({ message: "La modification de l'annonce a échoué.", error: error })
    }
})


// Modifier une annonce pour un Donneur
exports.modifierAnnonceDon = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    const {date, numTel, adresse, detail, idMedic} = req.body
  
    const resultat = await annonceModel.findByIdAndUpdate(id, req.body)
    if (!resultat) {
      return res.status(404).json({ message: "L'annonce n'existe pas" })
    }
    res.status(200).json({ message: "L'annonce a été modifiée avec succès."})
    
    } catch (error) {
      res.status(400).json({ message: "La modification de l'annonce a échoué.", error: error })
    }
})

// Supprimer une annonce pour un Pharmacien  :
exports.supprimerAnnoncePharm = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await annonceModel.findByIdAndDelete(id)
    res.status(201).json("Annonce supprimé ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// Supprimer une annonce pour un Donneur  :
exports.supprimerAnnonceDon = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.params.id
    await annonceModel.findByIdAndDelete(id)
    res.status(201).json("Annonce supprimé ")
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


// Afficher les annonces : 
exports.afficherAnnonce = expressAsyncHandler(async(req,res) => {
  try {
      const annonce = await annonceModel.find()
      console.log(req.annonce)
      res.status(202).json(annonce)
  } catch (error) {
      res.status(400)
      console.log(error)
  }
})
