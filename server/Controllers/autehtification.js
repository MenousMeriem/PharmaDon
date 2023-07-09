const utilisateurModel = require('../Models/utilisateurModel')
const refreshTokenModel = require('../Models/refreshTokenModel')
const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 
const crypto = require('node:crypto')
const nodemailer = require('nodemailer')


//Sign token
const genererToken =(data) => {
    const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "100000000h"})
    return token
}


//Login : [ACCESS TOKEN,REFRESH TOKEN]
exports.seConnecter = expressAsyncHandler(async (req, res) => {
    
    try{
        const {mail, mot_de_passe} = req.body
            if (!mail || !mot_de_passe) {
                res.status(400)
                throw new Error('Mail ou mot de passe incorrect')
        }
        
        const utilisateurExiste = await utilisateurModel.find({mail: mail})
            if(utilisateurExiste.length == 0) {
                res.status(400)
                throw new Error("Mail n'éxiste pas")
        }
    
        const matchPassword = await bcrypt.compare(
            mot_de_passe,
            utilisateurExiste[0].mot_de_passe,
        )
            if(!matchPassword){
                res.status(400)
                throw new Error('Mot de passe incorrect')
            }
            if(!utilisateurExiste[0].isActive) {
                res.status(200).json({isActive: false,_id:utilisateurExiste[0]._id})
            }
        const accessToken = genererToken({
            _id: utilisateurExiste[0]._id,
            role: utilisateurExiste[0].role,
        })

        const refreshToken = jwt.sign(
            { 
            _id: utilisateurExiste[0]._id, 
            role: utilisateurExiste[0].role
            },
            process.env.REFRESH_TOKEN_SECRET
        )
            await refreshTokenModel.create({ utilisateurId: utilisateurExiste[0]._id, refreshToken})
            res.status(200).json({
                _id: utilisateurExiste[0]._id,
                mail: utilisateurExiste[0].mail,
                role: utilisateurExiste[0].role,
                accessToken,
                refreshToken,
            })
    }catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

//Reactiver un compte
exports.reactiverController = expressAsyncHandler(async (req,res) => {
    const {id} = req.params
    const user = await utilisateurModel.findByIdAndUpdate(id,{isActive: true})
    const accessToken = genererToken({_id: user._id, role: user.role})
    const refreshToken = jwt.sign(
        { 
        _id: user._id, 
        role: user.role
        },
        process.env.REFRESH_TOKEN_SECRET
    )
        await refreshTokenModel.create({ utilisateurId: user._id, refreshToken})
    res.status(200).json({accessToken, refreshToken})
})
//Refresh access token
// exports.refreshAccess = expressAsyncHandler(async (req, res) => {
//     try {
//         const { token } = req.body
//             if (!token) {
//                 res.status(400)
//                 throw new Error("No refreshToken!")
//             }

//         const refreshExist = await refreshTokenModel.find({ refreshToken: token })
//             if (refreshExist.length == 0) {
//                 res.status(400)
//                 throw new Error("No refreshToken!")
//             }

//         const userData = jwt.verify(token, process.env.REFRESH_TOKEN)
        
//         const {iat, ...data} = userData
        
//         const accessToken = genererToken(data)
//             res.status(200).json({ token: accessToken })

//     }catch (error) {
//             res.status(400)
//             throw new Error(error)
//         }
//   })


//Logout
exports.logout = expressAsyncHandler(async (req, res) => {
    try {
        const { token } = req.body
            if (!token) {
                res.status(400)
                throw new Error("No token!")
            }
            await refreshTokenModel.findOneAndDelete({ refreshToken: token })
                res.status(200).json('Vous vous etes deconnctés ! ')
    }catch (error) {
        throw new Error(error)
    }
  })


    // Mot de passe oublié : 
    exports.resetPassword = expressAsyncHandler(async (req, res) => {
        const {mail} = req.body

        if(!mail) {
            res.status(400).json("mail n'existe pas ! ")
        } 

        const userExist = await utilisateurModel.findOne({mail})
        console.log(userExist)
        if(userExist==null) throw new Error("L'uilisateur n'éxiste pas")
        
        if(userExist.resetKey) {   
            const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_Mail,
                pass: process.env.SMTP_Pass
                }
            });
            
            // send mail with defined transport object
            let info = await transporter.sendMail({
            from: process.env.SMTP_Mail, // sender address
            to: mail.toString(), // list of receivers
            subject: "Réinitialisation du mot de passe", // Subject line
            text: `Mail de réinitialisation de mot de passe, 
            Cliquer sur le lien suivant: http://localhost:5173/resetPassword?key=${userExist.resetKey}`, // plain text body
            })
        }

        if(!userExist.resetKey) {
            const key = crypto.randomBytes(30).toString('hex')
            await utilisateurModel.findOneAndUpdate({mail}, {resetKey: key})
            
            const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_Mail,
                pass: process.env.SMTP_Pass
                }
            });
            
            // send mail with defined transport object
            let info = await transporter.sendMail({
            from: process.env.SMTP_Mail, // sender address
            to: mail.toString(), // list of receivers
            subject: "Réinitialisation du mot de passe", // Subject line
            text: `Mail de réinitialisation de mot de passe, 
            Cliquer sur le lien suivant: http://localhost:5173/resetPassword?key=${key}`, // plain text body
            })
        }
        
        res.status(200).json({success: true, message: "Clé de réinitialisation envoyer avec succés!"})

}) 

exports.verifierCle = expressAsyncHandler(async (req, res) => {
    const {key} = req.query //get dans route qui n'a pas de body mm delete que post et put 
    const user = await utilisateurModel.findOne({resetKey: key})
    if (!user) return res.status(200).json({success: false, mail: null})
    res.status(200).json({success: true, mail: user.mail})
})

exports.changePassword = expressAsyncHandler(async (req, res) => {
    const {mdp, mail} = req.body
    await utilisateurModel.findOneAndUpdate({mail}, {mot_de_passe: await bcrypt.hash(mdp, 10)})
    res.status(200).json("Mot de passe modifié avec succes ! ")
})

