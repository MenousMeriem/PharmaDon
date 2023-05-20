import React from 'react'
import avatar from '../../../assets/avatar.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
          {/* Navbar */}
          <div className="navbar bg-[#0DC4C7] p-5">
              <div className="navbar-start">
              <label tabIndex={0}  htmlFor="my-drawer" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              </div>
              <div className="navbar-center hidden text-white lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/Accueil'}>Accueil</NavLink></li>
                    <li><NavLink to={'/PageProfilPharmacien'}>Nos services</NavLink></li>
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
                      <a className="justify-between">
                        Profil
                      </a>
                    </li>
                    <li><a>Mes annonces</a></li>
                    <li><a>Deconexion</a></li>
                  </ul>
                </div>
              </div>
            </div>
          {/* Navvar */}
    </div>
  )
}

export default Navbar