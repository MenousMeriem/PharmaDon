const {
    seConnecter,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()
const {protectUtilisateur} = require('../Middleware/protect')

autehtificationRoute
    .post('/Seconnecter', protectUtilisateur, seConnecter)


module.exports = autehtificationRoute