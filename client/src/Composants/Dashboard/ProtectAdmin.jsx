import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const protectAdmin = (utilisateur) => {
    const isAdmin = utilisateur?.toLowerCase() === 'admin' ? true : false
return isAdmin
}


function ProtectAdmin() {
    const role = JSON.parse(localStorage.getItem('Utilisateur')).role
    const isAdmin = protectAdmin(role)
return isAdmin ? <Outlet/> : <Navigate to="/Connexion"/> 
}

export default ProtectAdmin