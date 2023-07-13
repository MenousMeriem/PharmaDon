import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import avatar from '../../assets/Navbar/avatar.png'
import img from '../../assets/Navbar/logoo.png'
import {toast} from 'react-toastify'
import axios from 'axios'

function NavBar() {
  
    const navigate = useNavigate()
    
    // Recuperation de l'utilisateur : 
    const user = localStorage.getItem('Utilisateur')

    // Recuperation du token :
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject && currentUserObject.accessToken}`
        }
    }

    // Desactiver son compte : 
    const Autosuppression  = async (e) => {
      e.preventDefault();
      try {
        if(user) {
          await axios.delete('http://localhost:5000/Utilisateur/AutoSuppression/', config)
          navigate('/Connexion')
        }
      } catch (error) {
          const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
          toast.error(errorMessage)
      }
    }

    // Deconnecter : 
    const Deconnexion =  (e) => {
      const user = JSON.parse(localStorage.getItem('Utilisateur'))
      if(user) localStorage.removeItem('Utilisateur')
      navigate('/Connexion')
    }

    // Lien de profil apres la connexion :
    const handleProfile = () => {
      const user = JSON.parse(localStorage.getItem('Utilisateur'))
        if (user.role=== 'Pharmacie') {
          navigate('/PageProfilPharmacien')
        } else if (user.role=== 'Association') {
          navigate('/PageProfilAssociation')
        } else if (user.role=== 'Patient') {
          navigate('/PageProfilPatient')
      }
    }


  return (
    <div>
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><NavLink to={'/'} > Accueil </NavLink></li>
                  <li><NavLink to={'/NosServices'} > Nos services </NavLink></li>
                  <li><NavLink to={'/AProposdeNous'}>A propos de nous</NavLink></li>
                  
                  {!user && 
                  <React.Fragment>
                  <li><Link to={'/Connexion'} > Se connecter </Link></li>
                  <li tabIndex={0}>   
                    <Link className="justify-between">
                      S'inscrire
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </Link> 
                    <ul className="p-2 bg-white text-black">
                      <li><Link to={'/InscriptionPharmacien'}>Pharmacien</Link></li>
                      <li><Link to={'/InscriptionAssociation'}>Association</Link></li>
                      <li><Link to={'/InscriptionPatient'}>Patient</Link></li>
                    </ul>
                  </li>
                  </React.Fragment>}
                </ul>
              </div>
              <div>
                <figure> <img src={img} className='w-20 h-16 hidden lg:block'/> </figure>
              </div> 
            </div>

            <div className="navbar-center hidden text-[#203374] lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'}>Accueil</NavLink></li>
                    <li><NavLink to={'/NosServices'}>Nos services</NavLink></li>
                    <li><NavLink to={'/AProposdeNous'}>A propos de nous</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end ">
              {user? 
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={avatar} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <button onClick={handleProfile} className="justify-between">
                        Profil
                      </button>
                    </li>
                    <li><Link to={'/PageMesAnnonces'}>Mes annonces</Link></li>
                    <li><Link to={'/Connexion'} onClick={Deconnexion}>Deconnexion</Link></li>
                    <li><Link to={'/Connexion'} onClick={Autosuppression}> Quitter </Link></li>
                  </ul>
                </div>
                : 
                <>
                <NavLink to={'/Connexion'}>
                  <button  className="btn text-[#203374] bg-white border-[#203374] hover:bg-[#203374] hover:text-white mr-3 hidden lg:block">Se connecter</button>
                </NavLink>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <button className="btn text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7] hidden lg:block">S'inscrire</button>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52 bg-white text-[#203374]">
                        <li><NavLink to={'/InscriptionPharmacien'}>Pharmacien</NavLink></li>
                        <li><NavLink to={'/InscriptionAssociation'}>Association</NavLink></li>
                        <li><NavLink to={'/InscriptionPatient'}>Patient</NavLink></li>
                    </ul>
                </div>
              </>}
            </div>
        </div>
    </div>
  )
}

export default NavBar