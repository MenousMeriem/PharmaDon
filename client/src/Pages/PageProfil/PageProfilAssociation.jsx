import React from 'react'
import Informations from '../../Composants/Profil/ProfilAssociation/Profil/Informations'
import animation_ from '../../assets/Annimations/87945-profile-setup.json'
import Lottie from 'lottie-react'

function PageProfilAssociation() {
  return (
    <div>
      <h1 className='text-lg text-center text-[#203374] mt-5 sm:text-4xl sm:mt-14 py-10 px-20'> Mon profil </h1>
      <div className='flex justify-center'>
         <Lottie className='w-72 h-60' animationData={animation_} /> 
      </div>
      <Informations/>   
    </div>
  )
} 
 
export default PageProfilAssociation 