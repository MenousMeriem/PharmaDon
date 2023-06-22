const {
    ajouterAnnonce,
    modifierAnnonce,
    supprimerAnnonce,
    afficherAnnonce,
    afficherAnnonceUserCourant,
    afficherAnnoncePharmacien,
    afficherAnnonceAssociation,
    afficherAnnoncePatient
} = require('../Controllers/annonceController')
const {mkdir} = require('fs/promises')
const path = require('path')

const annonceRoute = require('express').Router()
const {protectUtilisateur} = require('../Middleware/protect')

const multer = require('multer')

const telecharger = multer({
  storage: multer.diskStorage({
      destination: async function(req, file, callback) {
          const folderName = `${Date.now()}`
          req.folderName = folderName
          await mkdir(path.join(__dirname, "../images", folderName))
          req.folder = folderName
          callback(null ,path.join(__dirname, '../images', folderName))
      },
      filename: function (req, file, callback) {
        const extArr = file.mimetype.split('/')
        const extenstion = extArr[extArr.length -1]
          let filename = `${Date.now()}.${extenstion}`;
          callback(null, filename); 
        } 
  }),
  
}) 
annonceRoute
    .post('/AjouterAnnonce', protectUtilisateur,telecharger.array("image"), ajouterAnnonce)
    .put('/ModifierAnnonce/:id', protectUtilisateur, modifierAnnonce)
    .delete('/SupprimerAnnonce/:id', protectUtilisateur, supprimerAnnonce)    
    .get('/AfficherAnnonce', afficherAnnonce)
    .get('/AfficherAnnonceUserCourant', protectUtilisateur, afficherAnnonceUserCourant)
    .get('/AfficherAnnoncePharmacien/:id', afficherAnnoncePharmacien)
    .get('/AfficherAnnonceAssociation/:id', afficherAnnonceAssociation)
    .get('/AfficherAnnoncePatient/:id', afficherAnnoncePatient)
module.exports = annonceRoute