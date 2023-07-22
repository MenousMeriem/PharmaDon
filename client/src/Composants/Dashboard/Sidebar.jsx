import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Navbar/avatar.png'
import {CgProfile} from 'react-icons/cg'
import {BsBarChartLineFill} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'
import {IoIosWarning} from 'react-icons/io'
import {TbLogout} from 'react-icons/tb'
import {IoMdNotifications} from 'react-icons/io'

function Sidebar() {
  
  // Deconnecter : 
  const Deconnexion =  (e) => {
    const user = JSON.parse(localStorage.getItem('Utilisateur'))
    if(user) localStorage.removeItem('Utilisateur')
    navigate('/Connexion')
  }


  return (
    <div className='bg-[#219ebc] shadow-gray-600 shadow-xl rounded-r-2xl '>
      <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-screen text-base-content">
              {/* Sidebar content here */}
              <div className="avatar left-20">
                <div className="w-28 rounded">
                  <img src={image}/>
                </div>
              </div>
              <div className='p-5 mt-6 text-white font-bold'>
                <li><Link to={'/Dashboard'}> <BsBarChartLineFill/> Statistiques</Link></li>
                <li><Link to={'/Dashboard/Profil'}> <CgProfile/> Profil</Link></li>
                <li><Link to={'/Dashboard/Utilisateurs'}> <FaList/> Liste des utilisateurs</Link></li>
                <li><Link to={'/Dashboard/Attente'}> <IoMdNotifications/> Liste d'attente</Link></li>
                <li><Link to={'/Dashboard/Signalements'}> <IoIosWarning/> Liste des signalements</Link></li>
                <li><Link to={'/Connexion'} onClick={Deconnexion}> <TbLogout/> Deconnexion</Link></li>
              </div>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar

