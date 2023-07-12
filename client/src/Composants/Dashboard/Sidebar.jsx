import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-screen bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li><Link to={'/Dashboard'}>Statistiques</Link></li>
              <li><Link to={'/Dashboard/Profil'}>Profil</Link></li>
              <li><Link to={'/Dashboard/ListUsers'}>Liste des utilisateurs</Link></li>
              <li><Link to={'/'}>Liste des signalements</Link></li>
              {/* <li><Link to={'/'}>Liste des signalements</Link></li> */}
          </ul>
      </div>
    </div>
  )
}

export default Sidebar

