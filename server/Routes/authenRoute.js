const {
    seConnecter,
} = require('../Controllers/autehtification')

const autehtificationRoute = require('express').Router()

autehtificationRoute
    .post('/Seconnecter', seConnecter)


module.exports = autehtificationRoute