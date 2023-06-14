import React, {useState} from 'react'
import Informations from '../../Composants/Profil/ProfilPatient/Profil/Informations'
import NavBar from '../../Composants/NavBar/NavBar'
import Lottie from 'lottie-react'
import animation from '../../assets/Annimations/5699-loading-26-paper-plane.json'
import animation_ from '../../assets/Annimations/87945-profile-setup.json'

function PageProfilPatient() {
   //Loading 
  //  const [loading, setLoading] = useState(true)


  // if(loading) return ( <Lottie animationData={animation} /> )
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

export default PageProfilPatient