import React from 'react'
import Informations from '../../Composants/Profil/ProfilPatient/Profil/Informations'
import Navbar from '../../Composants/Profil/Navbar'

function PageProfilPatient() {
  return (
    <div>
        <Navbar/>
        <h1 className='text-2xl text-center font-extrabold py-5  text-[#203374] '> Mon profil </h1>
        <Informations/> 
    </div>
  )
}

export default PageProfilPatient