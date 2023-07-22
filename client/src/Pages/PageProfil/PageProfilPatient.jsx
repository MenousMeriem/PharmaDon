import React from 'react'
import Informations from '../../Composants/Profil/ProfilPatient/Profil/Informations'


function PageProfilPatient() {

  return (
    <div>
      <h1 className='text-[#203374] text-xl text-center font-black p-5 lg:text-3xl '> Bienvenue dans ton profile ! </h1>
      <Informations/>
    </div>
  ) 
}

export default PageProfilPatient