const {
    ajouterAnnoncePharm,
    ajouterAnnonceDon,
    modifierAnnoncePharm,
    modifierAnnonceDon,
    supprimerAnnoncePharm,
    supprimerAnnonceDon,
    afficherAnnonce
} = require('../Controllers/annonceController')

const annonceRoute = require('express').Router()
const {protectPharmacien} = require('../Middleware/protect')
const {protectDonneur} = require('../Middleware/protect')


annonceRoute
    .post('/AjouterAnnoncePharm', protectPharmacien, ajouterAnnoncePharm)
    .post('/AjouterAnnonceDon', protectDonneur, ajouterAnnonceDon)
    .put('/ModifierAnnoncePharm', protectPharmacien, modifierAnnoncePharm)
    .put('/ModifierAnnonceDon', protectDonneur, modifierAnnonceDon)
    .delete('/SupprimerAnnoncePharm', protectPharmacien, supprimerAnnoncePharm)    
    .delete('/SupprimerAnnonceDon', protectDonneur, supprimerAnnonceDon)
    .get('/AfficherAnnonce', afficherAnnonce)
    
module.exports = annonceRoute