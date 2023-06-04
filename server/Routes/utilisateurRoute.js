const {
    ajouterUtilisateur,
    afficherUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoSupression,
  } = require("../Controllers/utilisateurController")
  const path = require('node:path')
  const {mkdir} = require('fs/promises')

  const {   
      protectUtilisateur, 
        } = require("../Middleware/protect")
  
  const utilisateurRoute = require("express").Router()
  
  const multer = require('multer')

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
    .get("/AfficherUtilisateur", afficherUtilisateur)
    .put("/ModifierUtilisateur/:id", protectUtilisateur, modifierUtilisateur)
    .delete("/SupprimerUtilisateur/:id", protectUtilisateur, supprimerUtilisateur)
    .delete("/AutoSuppression", autoSupression)
  
  module.exports = utilisateurRoute

  