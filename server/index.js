const express = require('express') 
const mongoose = require('mongoose')
const ErrorHandler = require('./Middleware/errorHandler')
const autehtificationRoute = require('./Routes/authenRoute')
const annonceRoute = require('./Routes/annonceRoute')
const utilisateurRoute = require('./Routes/utilisateurRoute')
const cors = require('cors')

require('dotenv').config()

const index = express()
index.use(cors({
    origin: "http://localhost:5173"
}))

index.use(express.json())
index.use(express.urlencoded({extended: false}))

index.use('/Seconnecter', autehtificationRoute)
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
            console.log(' SERVER RUNNING !!! ')
        })
    })
    .catch((err) => console.log(err))
