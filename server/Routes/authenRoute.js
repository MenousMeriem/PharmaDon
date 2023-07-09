const {
    seConnecter, 
    changePassword,
    resetPassword,
    verifierCle,
    reactiverController,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/Seconnecter', seConnecter)
    .put('/modifierPassword', changePassword)
    .post('/reinitialiserMdp', resetPassword)
    .put('/reactiver/:id',reactiverController)
    .get('/verifierCle', verifierCle)


module.exports = autehtificationRoute