const {
    seConnecter, 
    changePassword,
    resetPassword,
    verifierCle,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/Seconnecter', seConnecter)
    .put('/modifierPassword', changePassword)
    .post('/reinitialiserMdp', resetPassword)
    .get('/verifierCle', verifierCle)


module.exports = autehtificationRoute