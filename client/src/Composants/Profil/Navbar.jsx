import React from 'react'
import avatar from '../../assets/Navbar/avatar.png'
import { NavLink, Link, useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const onClick =  (e) => {
        const user = localStorage.getItem('Utilisateur')
        if(user) localStorage.removeItem('Utilisateur')
        navigate('/Accueil')
      }
  return (
    <div>
          {/* Navbar */}
          <div className="navbar bg-[#0DC4C7] p-5">
              <div className="navbar-start">
              {/* <label tabIndex={0}  htmlFor="my-drawer" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label> */}
              </div>
              <div className="navbar-center hidden text-white lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
                    <li><NavLink to={'/NosServices'}>Nos services</NavLink></li>
                    <li><NavLink to={'/Propos'}>A propos de nous</NavLink></li>
                </ul>
              </div>
              <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={avatar} />
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link to={'/PageProfilPharmacien'} className="justify-between">
                        Profil
                      </Link>
                    </li>
                    <li><Link to={'/PageAnnoncesPharmacien'}>Mes annonces</Link></li>
                    <li><Link onClick={onClick} >Deconnexion</Link></li>        
                    <li><Link>Quitter</Link></li>
                  </ul>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Navbar