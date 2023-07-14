import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const protectAdmin = (utilisateur) => {
    const isAdmin = utilisateur?.toLowerCase() === 'Admin' ? true : false
    return isAdmin
}

function ProtectAdmin({role}) {
    const isAdmin = protectAdmin(role)
  return isAdmin ? <Outlet/> : <Navigate to="/Connexion"/> 
}

export default ProtectAdmin