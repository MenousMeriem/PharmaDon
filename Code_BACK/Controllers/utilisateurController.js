const utilisateurModel = require("../Models/utilisateurModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")


//Créer un utilisateur :
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {

    const { mot_de_passe, ...body } = req.body
            await utilisateurModel.create({
            ...body,
            mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
        })
        res.status(201).json(" Utilisateur ajouter !!")

  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


// Modifier un utilsateur : 
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
            await utilisateurModel.findByIdAndUpdate(id, req.body)
            res.status(200).json(" Utilisateur modifié !!")
  } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})


// Supprimer un utilisateur : 
exports.supprimerUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const { id } = req.params
            await utilisateurModel.findByIdAndDelete(id)
            res.status(202).json("Utilisateur supprimé !! ")
    } catch (error) {
            res.status(400)
            throw new Error(error)
  }
})


// l'utilisateur supprime son compte :
exports.autoSupression = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
        await utilisateurModel.findByIdAndDelete(id)
        res.status(202).json("Compte supprimé !")
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})
