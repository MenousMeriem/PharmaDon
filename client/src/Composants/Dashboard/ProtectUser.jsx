import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


    const protectUser = (utilisateur) => {
        const isUser = (utilisateur?.toLowerCase() === 'pharmacie' || utilisateur?.toLowerCase() === 'association' || utilisateur?.toLowerCase() === 'patient') ? true : false
        return isUser
    }


    function ProtectUser() {
        const role = JSON.parse(localStorage.getItem('Utilisateur')).role
        const isUser = protectUser(role)
        return isUser ? <Outlet/> : <Navigate to="/Connexion"/> 
    }


export default ProtectUser