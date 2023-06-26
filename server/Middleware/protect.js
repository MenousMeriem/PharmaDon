const expressAsyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

//Protect pour n'importe quel utilisateur : (Pharmacie, Association ou patient)
exports.protectUtilisateur = expressAsyncHandler(async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"]
      const token = authHeader && authHeader.split(" ")[1]
      if (!token) {
        res.status(400)
        throw new Error("No token!")
      }
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      const { role, _id } = user
      req.user = { _id, role }
      next()
    } catch (error) {
      res.status(400)
      throw new Error(error)
    }
  })

  // PROTECT POUR L'ADMIN : 
  exports.protectAdmin = expressAsyncHandler(async(req, res, next) => {
    try {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1]
      if(!token) {
        res.status(400)
        throw new Error('No token ')
      }
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      if(user.role !== "Admin") throw new Error("Vous n'etes pas Admin") 
      const { role, _id } = user
      req.user = { _id, role }
      next()
    } catch (error) {
      res.status(400)
      throw new Error(error)
    }
  })