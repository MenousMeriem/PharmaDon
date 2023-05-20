const {
    ajouterUtilisateur,
    afficherUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoSupression,
  } = require("../Controllers/utilisateurController")
  
  const {   
      protectUtilisateur, 
        } = require("../Middleware/protect")
  
  const utilisateurRoute = require("express").Router()
  
  utilisateurRoute
    .post("/AjouterUtilisateur", protectUtilisateur, ajouterUtilisateur)
    .get("/AfficherUtilisateur", protectUtilisateur, afficherUtilisateur)
    .put("/ModifierUtilisateur/:id", protectUtilisateur, modifierUtilisateur)
    .delete("/SupprimerUtilisateur/:id", protectUtilisateur, supprimerUtilisateur)
    .delete("/AutoSuppression", autoSupression)
  
  module.exports = utilisateurRoute

  