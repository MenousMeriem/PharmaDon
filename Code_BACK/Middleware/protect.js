const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

//Protect Admin : 
exports.protectAdmin = expressAsyncHandler(async (req, res, next)=> {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
            if (!token) {
                res.status(400)
                throw new Error("Pas de token")
            }
        const utilisateur = jwt.verify(token, process.env.ACCESS_TOKEN)
        const {role, _id} = utilisateur
        const isAdmin = role === "Admin"
            if(!isAdmin) {
                res.status(404)
                throw new Error("Vous n'etes pas autorisé, vous n'etes pas l'admin")
            }
            req.utilisateur =  {_id, role}
            next()
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


//Protect Pharmacien : 
exports.protectPharmacien = expressAsyncHandler(async (req, res, next)=> {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
            if (!token) {
                res.status(400)
                throw new Error("Pas de token")
            }
        const utilisateur = jwt.verify(token, process.env.ACCESS_TOKEN)
        const {role, _id} = utilisateur
        const isPharmacien = role === "Pharmacien"
            if(!isPharmacien) {
                res.status(404)
                throw new Error("Vous n'etes pas autorisé, vous n'etes pas l'admin")
            }
            req.utilisateur =  {_id, role}
            next()
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//Protect Benificiare : 
exports.protectBenificiare = expressAsyncHandler(async (req, res, next)=> {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
            if (!token) {
                res.status(400)
                throw new Error("Pas de token")
            }
        const utilisateur = jwt.verify(token, process.env.ACCESS_TOKEN)
        const {role, _id} = utilisateur
        const isBenificiare = role === "Benificiare"
            if(!isBenificiare) {
                res.status(404)
                throw new Error("Vous n'etes pas autorisé, vous n'etes pas l'admin")
            }
            req.utilisateur =  {_id, role}
            next()
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


//Protect Donneur : 
exports.protectDonneur = expressAsyncHandler(async (req, res, next)=> {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
            if (!token) {
                res.status(400)
                throw new Error("Pas de token")
            }
        const utilisateur = jwt.verify(token, process.env.ACCESS_TOKEN)
        const {role, _id} = utilisateur
        const isDonneur = role === "Donneur"
            if(!isDonneur) {
                res.status(404)
                throw new Error("Vous n'etes pas autorisé, vous n'etes pas l'admin")
            }
            req.utilisateur =  {_id, role}
            next()
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})


//Protect Patient : 
exports.protectPatient = expressAsyncHandler(async (req, res, next)=> {
    try {
        const authHeader = req.headers["authorization"]
        const token = authHeader && authHeader.split(" ")[1]
            if (!token) {
                res.status(400)
                throw new Error("Pas de token")
            }
        const utilisateur = jwt.verify(token, process.env.ACCESS_TOKEN)
        const {role, _id} = utilisateur
        const isPatient = role === "Patient"
            if(!isPatient) {
                res.status(404)
                throw new Error("Vous n'etes pas autorisé, vous n'etes pas l'admin")
            }
            req.utilisateur =  {_id, role}
            next()
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//Protect n'importe quel utilisateur : 
exports.protectUtilisateur = expressAsyncHandler(async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"]
      const token = authHeader && authHeader.split(" ")[1]
      if (!token) {
        res.status(400)
        throw new Error("No token!")
      }
      const user = jwt.verify(token, process.env.ACCESS_TOKEN)
      const { role, _id } = user
      req.user = { _id, role }
      next()
    } catch (error) {
      res.status(400)
      throw new Error(error)
    }
  })