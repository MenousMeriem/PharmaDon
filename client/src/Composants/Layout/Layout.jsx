import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PieddePage from '../Footer/PieddePage'

function Layout() {
    
  const locaion = useLocation()
    if (
        location.pathname==='/PageProfilPharmacien' || 
        location.pathname==='/PageAnnoncesPharmacien' ||
        locaion.pathname === '/PageProfilPatient' ||
        location.pathname === '/PageProfilAssociation')
        {return (
            <div>
                <main className=''>
                    <Outlet/>
                </main>
                <PieddePage/>
            </div>
            )} else if(location.pathname==='/Connexion'){ 
            return (
                <div>
                    <main className=''>
                        <Outlet/>
                    </main>
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
             }
}

export default Layout