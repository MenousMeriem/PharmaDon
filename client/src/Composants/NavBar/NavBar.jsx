import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import avatar from '../../assets/Navbar/avatar.png'
import img from '../../assets/Navbar/logoo.png'

function NavBar() {

    const navigate = useNavigate()
   
    const Deconnexion =  (e) => {
        const user = JSON.parse(localStorage.getItem('Utilisateur'))
        if(user) localStorage.removeItem('Utilisateur')
        navigate('/Connexion')
      }

    const handleProfile = () => {
      const user = JSON.parse(localStorage.getItem('Utilisateur'))
        if (user.role=== 'Pharmacie') {
          navigate('/PageProfilPharmacien')
        } else if (user.role=== 'Association') {
          navigate('/PageProfilAssociation')
        } else if (user.role=== 'Patient') {
          navigate('/PageProfilPatient')
      }}

    const user = localStorage.getItem('Utilisateur')
      
  return (
    <div>
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><NavLink to={'/Accueil'} > Accueil </NavLink></li>
                  <li><NavLink to={'/NosServices'} > Nos services </NavLink></li>
                  <li><NavLink to={'/AProposdeNous'}>A propos de nous</NavLink></li>
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
                </ul>
              </div>
              <div>
                <figure> <img src={img} className='w-20 h-16 hidden lg:block'/> </figure>
              </div> 

              {/* <NavLink to={'/Accueil'} className="btn btn-ghost normal-case text-xl hidden lg:block">PharmaDon</NavLink> */}
            </div>
            <div className="navbar-center hidden text-[#203374] lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
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
         {/* Barre de navigation  */}
    </div>
  )
}

export default NavBar