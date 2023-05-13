const expressAsyncHandler = require('express-async-handler')
const categorieModele = require('../Models/categorieModele')


//Ajouter une categorie : 
exports.ajouterCategorie = expressAsyncHandler (async (req, res) => {
    try {
        const {nomCat} = req.body
            if(!nomcat) {
                res.status(400).json('Cette catégorie néxiste pas')
            }
            await categorieModele.create({
                nomCat
            })
                res.status(201).json('Catégorie ajoutée !! ')

    } catch (error) {
        res.status(400)
        console.log(error)
    }
})

//Modifier une categorie : 
exports.modifierCategorie = expressAsyncHandler(async (req,res) => {
    try {
        const {id} = req.params
        if(!id) {
            res.status(400).json('Catégorie n éxiste pas !!!')
        }
        await categorieModele.findByIdAndUpdate(id)
        res.status(202).json('Catégorie modifiée')
    } catch (error) {
        res.status(400)
        console.log(error)
        
    }
})

// Supprimer une categorie : 
exports.supprimerCategorie = expressAsyncHandler (async (req,res) => {
    try {
        const {id} = req.params 
        await categorieModele.findByIdAndDelete(id)
        res.status(202).json('Catégorie supprimé !! ')
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})


// Afficher une catégorie : 
exports.afficherCategorie = expressAsyncHandler(async(req,res) => {
    try {
        const categorie = await categorieModele.find()
        console.log(req.categorie)
        res.status(202).json(categorie)
    } catch (error) {
        res.status(400)
        console.log(error)
    }
})