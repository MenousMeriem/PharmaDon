const utilisateurModel = require("../Models/utilisateurModel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require("express-async-handler")


//Créer un utilisateur :
exports.ajouterUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const {mot_de_passe, ...body} = req.body
            if(!adresse || 
               !mail ||
               !mot_de_passe ||
               !num_tel ||
               !role ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              ...body,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json("Utilisateur ajouté avec succes",{
              _id: newUtilisateur._id,
              accessToken: genAccessToken(newUtilisateur._id),
            })
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


//Créer un Admin :
exports.ajouterAdmin = expressAsyncHandler(async (req, res) => {
  try {
    // if(role==Admin){
      // const {mot_de_passe, ...body} = req.body
      // if(!adresse || 
      //    !mail ||
      //    !mot_de_passe ||
      //    !num_tel ||
      //    !nom ||
      //    !prenom ||
      //    !sexe ||
      //    !date_de_naissance ) {
      //   throw new Error('Veuillez remplir tout les champs ! ')
      // }
      // if((await utilisateurModel.find({mail})).length > 0) {
      //   throw new Error('Utilisateur existe')
      // }
      // const newUtilisateur = await utilisateurModel.create({
      //   ...body,
      //   mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
      // })
    // }
    const {mot_de_passe, ...body} = req.body
            if(!adresse || 
               !mail ||
               !mot_de_passe ||
               !num_tel ||
               !nom ||
               !prenom ||
               !sexe ||
               !date_de_naissance ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              ...body,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json("Utilisateur ajouté avec succes",{
              _id: newUtilisateur._id,
              accessToken: genAccessToken(newUtilisateur._id),
            })
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


//Créer un Pharmacien :
exports.ajouterPharmacien = expressAsyncHandler(async (req, res) => {
  try {
    const {mot_de_passe, ...body} = req.body
            if(!adresse || 
               !mail ||
               !mot_de_passe ||
               !num_tel ||
               !role ||
               !nom ||
               !prenom ||
               !sexe ||
               !date_de_naissance || 
               !fichier ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              ...body,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json("Utilisateur ajouté avec succes",{
              _id: newUtilisateur._id,
              accessToken: genAccessToken(newUtilisateur._id),
            })
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})


//Créer un Patient :
exports.ajouterPatient = expressAsyncHandler(async (req, res) => {
  try {
    const {mot_de_passe, ...body} = req.body
            if(!adresse || 
               !mail ||
               !mot_de_passe ||
               !num_tel ||
               !role ||
               !nom ||
               !prenom ||
               !sexe ||
               !date_de_naissance ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              ...body,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json("Utilisateur ajouté avec succes",{
              _id: newUtilisateur._id,
              accessToken: genAccessToken(newUtilisateur._id),
            })
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})

//Créer une Association :
exports.ajouterAssociation = expressAsyncHandler(async (req, res) => {
  try {
    const {mot_de_passe, ...body} = req.body
            if(!adresse || 
               !mail ||
               !mot_de_passe ||
               !num_tel ||
               !role ||
               !nomAssociation ||
               !fichier
              ) {
              throw new Error('Veuillez remplir tout les champs ! ')
            }
            if((await utilisateurModel.find({mail})).length > 0) {
              throw new Error('Utilisateur existe')
            }
            const newUtilisateur = await utilisateurModel.create({
              ...body,
              mot_de_passe: await bcrypt.hash(req.body.mot_de_passe, 10),
            })
            res.status(201).json("Utilisateur ajouté avec succes",{
              _id: newUtilisateur._id,
              accessToken: genAccessToken(newUtilisateur._id),
            })
  } catch (error) {
        res.status(400)
        throw new Error(error)
  }
})

// Afficher un utilisateur
exports.afficherUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
    const id = req.utilisateur._id
    const user = await utilisateurModel.findById(id)
     res.status(201).json(user)
  } catch (error) {
    res.status(400)
  }
})


// Modifier un utilsateur : 
exports.modifierUtilisateur = expressAsyncHandler(async (req, res) => {
  try {
        const id = req.user._id
            await utilisateurModel.findByIdAndUpdate(id, req.body)
            res.status(200).json("Utilisateur modifié !!")
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
