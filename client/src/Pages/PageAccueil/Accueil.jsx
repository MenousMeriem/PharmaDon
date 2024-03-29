import React from 'react'
import Hero from '../../Composants/Accueil/Hero'
import NosServices from '../../Composants/Accueil/NosServices'
import DevenirClient from '../../Composants/Accueil/DevenirClient'
import DescriptionPharmacie from '../../Composants/Accueil/DescriptionPharmacie'
import Contact from '../../Composants/ContactezNous/Contact'
import Divider from '../../Composants/Accueil/Divider'


function Accueil() {
  return (
    <div className='relative'>
      {/* <div className="h-20 w-20 fixed bottom-8 right-8 z-50"><BsFillChatDotsFill className="w-2/3 h-2/3 fill-blue-900"/></div> */}
      <Hero/>
      <DescriptionPharmacie/>
      <Divider/>
      <NosServices/>
      <DevenirClient/>
      {/* <AvisAutres/> */}
      <Contact/>
    </div>
  )
}

export default Accueil
