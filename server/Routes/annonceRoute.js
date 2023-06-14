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

const annonceRoute = require('express').Router()
const {protectUtilisateur} = require('../Middleware/protect')

 
annonceRoute
    .post('/AjouterAnnonce', protectUtilisateur, ajouterAnnonce)
    .put('/ModifierAnnonce/:id', protectUtilisateur, modifierAnnonce)
    .delete('/SupprimerAnnonce/:id', protectUtilisateur, supprimerAnnonce)    
    .get('/AfficherAnnonce', afficherAnnonce)
    .get('/AfficherAnnonceUserCourant', protectUtilisateur, afficherAnnonceUserCourant)
    .get('/AfficherAnnoncePharmacien', afficherAnnoncePharmacien)
    .get('/AfficherAnnonceAssociation', afficherAnnonceAssociation)
    .get('/AfficherAnnoncePatient', afficherAnnoncePatient)
module.exports = annonceRoute