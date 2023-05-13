const expressAsyncHandler = require('express-async-handler')
const commandeModel = require('../Models/commandeModel')

//Ajouter une commande  : 
exports.ajouterCommande = expressAsyncHandler (async (req, res) => {
    try {
        const {date, numTel, adresse, detail, idMedic} =
        req.body
      if (
        !date ||
        !numTel ||
        !adresse ||
        !detail       
      ) {
        res.status(400).json(" la commande n'existe pas !!")
      }
            await commandeModel.create({
                idPharmacien: req.user._id, 
                idMedic,
                date,
                numTel,
                adresse,
                detail,
            })
                res.status(201).json('commande ajouté !! ')

    } catch (error) {
        res.status(400)
        console.log(error)
    }
})
