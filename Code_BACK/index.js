const express = require('express') 
const mongoose = require('mongoose')
const ErrorHandler = require('./Middleware/errorHandler')
const autehtificationRoute = require('./Routes/authenRoute')
const categorieRoute = require('./Routes/categorieRoute')
const annonceRoute = require('./Routes/annonceRoute')
const utilisateurRoute = require('./Routes/utilisateurRoute')

require('dotenv').config()

const index = express()
index.use(express.json())
index.use(express.urlencoded({extended: true}))

index.use('/Seconnecter', autehtificationRoute)
index.use('/Categorie', categorieRoute)
index.use('/Annonce', annonceRoute)
index.use('/Utilisateur', utilisateurRoute)


index.use('/*', (req,res) => {
    res.status(404).json(' NOT FOUND !!!! ')
})

index.use(ErrorHandler)

mongoose 
    .connect(process.env.MONGO_URI)
    .then((res) =>{
        index.listen(process.env.PORT, () => {
            console.log(' SERVER RUNNIGN !!! ')
        })
    })
    .catch((err) => console.log(err))
