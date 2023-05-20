import React from 'react'
import { NavLink, useNavigate  } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        {/* Barre de navigation  */}
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
                <NavLink to={'/Accueil'} className="btn btn-ghost normal-case text-xl">PharmaDon</NavLink>
            </div>
            <div className="navbar-center hidden text-[#203374] lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
                    <li><NavLink to={'/PageProfilPharmacien'}>Nos services</NavLink></li>
                    <li><NavLink to={'/Propos'}>A propos de nous</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end ">
                <NavLink to={'/Connexion'} className="btn text-[#203374] bg-white border-[#203374] hover:bg-[#203374] hover:text-white mr-3">Se connecter</NavLink>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <NavLink to={'/Accueil'} className="btn text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7]">S'inscrire</NavLink>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 text-[#203374]">
                        <li><NavLink to={'/InscriptionPharmacien'}>Pharmacien</NavLink></li>
                        <li><NavLink to={'/InscriptionAssociation'}>Association</NavLink></li>
                        <li><NavLink to={'/InscriptionPatient'}>Patient</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
         {/* Barre de navigation  */}
    </div>
  )
}

export default NavBar