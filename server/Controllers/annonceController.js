const expressAsyncHandler = require('express-async-handler')
const annonceModel = require('../Models/annonceModel')
const medicamentModel = require('../Models/medicamentModel')
const utilisateurModel = require('../Models/utilisateurModel')


//Ajouter une annonce : 
exports.ajouterAnnonce = expressAsyncHandler (async (req, res) => {
    try {
        const { 
          numTel, wilaya, detail,nomMedicament, categorie} = req.body
      if (
        !numTel ||
        !wilaya ||
        !detail || 
        !categorie ||
        !nomMedicament
      ) {
        res.status(400)
        throw new Error("Remplissez vos champs SVP")
      }
      const med = await medicamentModel.create({nomMedicament, proprietaire: req.user._id, image: req.files.length ? req.folder +"/"+req.files[0].filename : ""})
        await annonceModel.create({
          idAuteur: req.user._id,
          numTel,
          wilaya,
          detail,
          idMedicament: med._id,
          categorie,
          // image: req.files.length ? req.folder
          // +"/"+req.files[0].filename : ""
        })
        res.status(201).json('Annonce ajoutée !!')
    } catch (error) {
        res.status(400)
        console.log(error.message)
    }
})


// Modifier une annonce :  
exports.modifierAnnonce = expressAsyncHandler(async (req, res) => {
  try {
    const idAnnonce = req.params.id  
    if("nomMedicament" in req.body) {
      const {nomMedicament,idMedicament ,...rest} = req.body
      body = rest
      await medicamentModel.findByIdAndUpdate(idMedicament, {nomMedicament})
      await annonceModel.findByIdAndUpdate(idAnnonce, rest)
    } else {
      await annonceModel.findByIdAndUpdate(idAnnonce, req.body)
    }
      res.status(201).json("Annonce modifier avec succés")    
    } catch (error) {
      res.status(400).json({ message: "La modification de l'annonce a échoué.", error: error.message })
    }
})


// Supprimer sa propre annonce :
exports.supprimerAnnonce = expressAsyncHandler(async (req, res) => {
  try {
    const idAnnonce = req.params.id
    const annonces = await annonceModel.findByIdAndDelete(idAnnonce)
    annonces.idMedicament.forEach(async ann => await medicamentModel.findByIdAndDelete(ann))
    res.status(201).json("Annonce supprimé ")
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})

// Supprimer une annonce par l'admin : 









// Afficher toutes les annonces :
exports.afficherAnnonce = expressAsyncHandler(async(req,res) => {
  try {
      let page = req.query.page
      const recherche = req.query.search
      if(recherche === '' || recherche === undefined){ 
        const skip = (parseInt(page) -1) * 6
        const documentCount = await medicamentModel.countDocuments()
        const pages = Math.ceil(documentCount / 6)
        const annonce = await medicamentModel.find().skip(skip).limit(6).populate('proprietaire')
        res.status(201).json({pages,annonce})
    } else {
        const skip = (parseInt(page) -1) * 6
        // const documentC = await utilisateurModel.find({wilaya: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i') }}).countDocuments()
        // const documentD = await utilisateurModel.find({role: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i') }}).countDocuments()
        const documentCount = await medicamentModel.find({nomMedicament: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i') }}).countDocuments()
        const pages = Math.ceil(documentCount / 6)
        const annonce = await medicamentModel.find({nomMedicament: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i') }}).skip(skip).limit(1).populate('proprietaire')
        res.status(201).json({pages,annonce})
    }
  } catch (error) {
      res.status(400)
      console.log(error)
  } 
})



// Afficher les annonces de l'utilisateur courant : 
exports.afficherAnnonceUserCourant = expressAsyncHandler(async(req,res) => {
  try {
    const id = req.user._id
    const annonce = await annonceModel.find({idAuteur: id}).populate('idMedicament')
    res.status(201).json(annonce) 
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


// Afficher les annonces des Pharmacies : 
exports.afficherAnnoncePharmacien = expressAsyncHandler(async(req,res) => {
    const {page,id} = req.query
    const skip = (parseInt(page) -1) * 6     
     const medicaments = await medicamentModel.find({proprietaire: id}).skip(skip).limit(6)
     const pages = Math.ceil(await medicamentModel.find({proprietaire: id}).countDocuments() / 6)
     res.status(202).json({
      pages,
      medicaments
     })
})

// Afficher les annonces des associations : 
exports.afficherAnnonceAssociation= expressAsyncHandler(async(req,res) => {
  try {
      const {page,id} = req.query
      const skip = (parseInt(page)- 1) * 6
      const medicaments = await medicamentModel.find({proprietaire: id}).skip(skip).limit(6)
      const pages = Math.ceil(await medicamentModel.find({proprietaire: id}).countDocuments() / 6)
      res.status(202).json({
        pages, 
        medicaments
      })
  } catch (error) {
      res.status(400)
  }
})


// Afficher les annonces des patients :
exports.afficherAnnoncePatient = expressAsyncHandler(async(req,res) => {
  try {
      const annonce = await annonceModel.find({idAuteur: req.params.id}).populate('idAuteur idMedicament')
      const filteredResult = annonce.filter(an => an.idAuteur.role === "Patient")
      res.status(202).json(filteredResult)
  } catch (error) {
      res.status(400)
  }
})

// Signalement 
exports.signalerAnnonce = expressAsyncHandler(async(req, res) => {
  try {
    const {id} = req.params
    const { raison} = req.body
    await annonceModel.findByIdAndUpdate(id,{$push: {signalement: raison}} )
    res.status(200).json(`Annonce [${id}] signaler avec succes`)
  } catch (error) {
    res.status(400)
  }
})

// pagination 
exports.pagination = expressAsyncHandler(async(req, res) => {
  try {
      const {pageActuelle, recherche, wilaya} = req.query
      let pages
      if(recherche === '' || recherche === undefined){
        pages = Math.ceil((await annonceModel.countDocuments())/10)
      } else{
        pages = Math.ceil((await annonceModel.find(
          {nomMedicament: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i')}}
        ).countDocuments())/10)
      }
      const skiPage = (pageActuelle - 1) * 10
      let annonces
      if(recherche){
        annonces = await annonceModel.find(
          {nomMedicament: {$regex: new RegExp(recherche.toString().toLowerCase(), 'i')}}
     ).skip(skiPage).limit(10)  
        } else{
          annonces = await annonceModel.find({}).skip(skiPage).limit(10)
        }
      res.status(200).json({
        pages,
        annonces
      })
  } catch (error) {
      res.status(400)
      throw new Error(error)
  }
})