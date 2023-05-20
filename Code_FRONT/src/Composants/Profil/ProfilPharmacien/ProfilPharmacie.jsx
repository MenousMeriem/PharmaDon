import React from 'react'

import Navbar from './Navbar'

function ProfilPharmacie() {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar/>
          <h1> Mon profil </h1>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><a>Mon profile</a></li>
            <li><a>Mes annonces </a></li>
            <li><a>Deconnéxion</a></li>
            <li><a>Quitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfilPharmacie