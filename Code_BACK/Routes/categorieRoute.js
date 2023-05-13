const {
    ajouterCategorie,
    modifierCategorie,
    supprimerCategorie,
    afficherCategorie,
} = require('../Controllers/categorieController')

const categorieRoute = require('express').Router()
const {protectPharmacien} = require('../Middleware/protect')

categorieRoute
    .post('/AjouterCategorie', protectPharmacien, ajouterCategorie)
    .put('/ModifierCategorie', protectPharmacien, modifierCategorie)
    .delete('/SupprimerCategorie', protectPharmacien, supprimerCategorie)
    .get('/AfficherCategorie', afficherCategorie)
    
module.exports = categorieRoute