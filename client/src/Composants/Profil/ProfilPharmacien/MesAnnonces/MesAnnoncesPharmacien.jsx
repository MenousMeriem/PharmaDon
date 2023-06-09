import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../../Navbar'
import CarteAnnonce from './CarteAnnonce'

function MesAnnoncesPharmacien() {
  return (
    <div>      
      {/* <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"> */}
          <Navbar/>
          <h1 className='text-lg text-[#203374] mt-5 sm:text-4xl sm:mt-14 py-10 px-20'> Mes annonces </h1>
          <CarteAnnonce/>
          {/* <Outlet/> */}
        </div>      
        // <div className="drawer-side">
        //   <label htmlFor="my-drawer" className="drawer-overlay"></label>
        //   <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            // {/* <!-- Sidebar content here --> */}
    //         <li><Link to={'/PageProfilPharmacien'}>Mon profile</Link></li>
    //         <li><Link to={'/PageAnnoncesPharmacien'}>Mes annonces </Link></li>
    //         <li><Link>Deconnéxion</Link></li>
    //         <li><Link>Quitter</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MesAnnoncesPharmacien