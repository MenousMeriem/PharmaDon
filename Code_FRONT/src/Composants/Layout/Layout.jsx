import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function Layout() {
  const locaion = useLocation()
  if(locaion.pathname === '/Connexion') 
  {return (
      <div>
          <main className=''>
              <Outlet/>
          </main>
          {/* <Footer/> */}
      </div>
    )} else {
    return (
        <div>
            <NavBar/>
            <main className=''>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </div>
  )
}}

export default Layout