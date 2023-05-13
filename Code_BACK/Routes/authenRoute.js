const {
    seConnecter,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()
const {protectPharmacien} = require('../Middleware/protect')

autehtificationRoute
    .post('/Seconnecter', protectPharmacien, seConnecter)


module.exports = autehtificationRoute