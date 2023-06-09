const {
    ajouterAnnonce,
    modifierAnnonce,
    supprimerAnnonce,
    afficherAnnonce
} = require('../Controllers/annonceController')

const annonceRoute = require('express').Router()
const {protectUtilisateur} = require('../Middleware/protect')


annonceRoute
    .post('/AjouterAnnonce', protectUtilisateur, ajouterAnnonce)
    .put('/ModifierAnnonce', protectUtilisateur, modifierAnnonce)
    .delete('/SupprimerAnnonce', protectUtilisateur, supprimerAnnonce)    
    .get('/AfficherAnnonce', afficherAnnonce)
    
module.exports = annonceRoute