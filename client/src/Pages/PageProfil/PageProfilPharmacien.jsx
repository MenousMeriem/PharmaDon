import React from 'react'
import Informations from '../../Composants/Profil/ProfilPharmacien/Profil/Informations'
import animation_ from '../../assets/Annimations/87945-profile-setup.json'

function PageProfilPharmacien() {


 
  return ( 
    <div>
      <h1 className='text-2xl text-center font-extrabold mt-10 text-[#203374]'> Mon profil </h1>
      <div className='flex justify-center'>
         <Lottie className='w-72 h-60' animationData={animation_} /> 
      </div>
        <Informations/>
    </div>
  ) 
}

export default PageProfilPharmacien