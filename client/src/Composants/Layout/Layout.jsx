import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import PieddePage from '../Footer/PieddePage'

function Layout() {
    
  const location = useLocation() 
    if (location.pathname==='/Connexion' || 
        location.pathname==='/ReinitialierMotdePasse' || 
        location.pathname==='/Mail'){ 
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