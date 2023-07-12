import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Navbar/avatar.png'
import {CgProfile} from 'react-icons/cg'
import {BsBarChartLineFill} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'
import {IoIosWarning} from 'react-icons/io'

function Sidebar() {
  return (
    <div className='bg-[#0dc4c71f]'>
      <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full text-base-content">
              {/* Sidebar content here */}
              <div className="avatar left-14">
                <div className="w-44 rounded">
                  <img src={image}/>
                </div>
              </div>
              <div className='p-5 mt-6 text-[#203374] font-bold'>
                <li><Link to={'/Dashboard'}> <BsBarChartLineFill/> Statistiques</Link></li>
                <li><Link to={'/Dashboard/Profil'}> <CgProfile className=''/> Profil</Link></li>
                <li><Link to={'/Dashboard/Utilisateurs'}> <FaList/> Liste des utilisateurs</Link></li>
                <li><Link to={'/'}> <IoIosWarning/> Liste des signalements</Link></li>
                {/* <li><Link to={'/'}>Liste des signalements</Link></li> */}
              </div>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar
