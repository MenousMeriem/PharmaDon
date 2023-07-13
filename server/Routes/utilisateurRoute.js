  const path = require('node:path')
  const {mkdir} = require('fs/promises')
  const utilisateurRoute = require("express").Router() 
  const multer = require('multer')
  
 const {
    ajouterUtilisateur,
    afficherTsUtilisateurs,
    afficherUtilisateur,
    afficherPharmacie,
    afficherAssociation,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoSupression,
    afficherAdmin,
    modifierAdmin,
  } = require("../Controllers/utilisateurController")

  const {   
      protectUtilisateur,
      protectAdmin 
        } = require("../Middleware/protect")
  
  const telecharger = multer({
    storage: multer.diskStorage({
      destination: async function(req, file, callback) {
          const folderName = `${Date.now()}`
          req.folderName = folderName
          await mkdir(path.join(__dirname, "../images", folderName))
          callback(null ,path.join(__dirname, '../images', folderName))
      },
      filename: function (req, file, callback) {
        const extArr = file.mimetype.split('/')
        const extenstion = extArr[extArr.length -1]
          let filename = `${Date.now()}.${extenstion}`;
          console.log(filename)
          callback(null, filename); 
        } 
    }),
    
  }) 

  utilisateurRoute
  .post("/AjouterUtilisateur", telecharger.array("image"), ajouterUtilisateur)
  .get('/AfficherUtilisateur', protectUtilisateur, afficherUtilisateur)
  .put("/ModifierUtilisateur", protectUtilisateur, modifierUtilisateur)
  .delete("/AutoSuppression", protectUtilisateur, autoSupression)
  .get('/AfficherPharmacie', afficherPharmacie)
  .get('/AfficherAssociation', afficherAssociation)
  .get("/AfficherTsUtilisateurs", protectAdmin, afficherTsUtilisateurs)
  .delete("/SupprimerUtilisateur/:id", protectAdmin, supprimerUtilisateur)
  .get('/AfficherAdmin', protectAdmin, afficherAdmin)
  .put("/ModifierAdmin", protectAdmin, modifierAdmin)
  
  
  module.exports = utilisateurRoute

  