const {
    seConnecter, 
    changePassword,
    resetPassword,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/Seconnecter', seConnecter)
    .put('/modifierPassword', changePassword)
    .post('/reinitialiserMdp', resetPassword)


module.exports = autehtificationRoute