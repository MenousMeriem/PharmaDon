const {
    ajouterAnnonce,
    modifierAnnonce,
    supprimerAnnonce,
    afficherAnnonce
} = require('../Controllers/annonceController')

const annonceRoute = require('express').Router()
const {protectUtilisateur} = require('../Middleware/protect')


annonceRoute
    .post('/AjouterAnnoncePharm', protectUtilisateur, ajouterAnnonce)
    .put('/ModifierAnnoncePharm', protectUtilisateur, modifierAnnonce)
    .delete('/SupprimerAnnoncePharm', protectUtilisateur, supprimerAnnonce)    
    .get('/AfficherAnnonce', protectUtilisateur, afficherAnnonce)
    
module.exports = annonceRoute