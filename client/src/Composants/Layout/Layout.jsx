import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PieddePage from '../Footer/PieddePage'

function Layout() {
  const locaion = useLocation()
  if(locaion.pathname === '/Connexion' || location.pathname==='/PageProfilPharmacien' || location.pathname==='/PageAnnoncesPharmacien') 
  {return (
      <div>
          <main className=''>
              <Outlet/>
          </main>
          <PieddePage/>
      </div>
    )} else { 
    return (
        <div>
            <NavBar/>
            <main className=''>
                <Outlet/>
            </main>
            <PieddePage/>
        </div>
  )
}}

export default Layout