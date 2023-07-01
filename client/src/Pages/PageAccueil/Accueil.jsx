import React from 'react'
import Hero from '../../Composants/Accueil/Hero'
import NosServices from '../../Composants/Accueil/NosServices'
import BarreRecherche from '../../Composants/BarreRecherche'
import DevenirClient from '../../Composants/Accueil/DevenirClient'
import DescriptionPharmacie from '../../Composants/Accueil/DescriptionPharmacie'
import Contact from '../../Composants/ContactezNous/Contact'
import {BsFillChatDotsFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import Divider from '../../Composants/Accueil/Divider'
import AvisAutres from '../../Composants/Accueil/AvisAutres'


function Accueil() {
  return (
    <div className='relative'>
      <div className="h-20 w-20 fixed bottom-8 right-8 z-50"><BsFillChatDotsFill className="w-2/3 h-2/3 fill-blue-900"/></div>
      <Hero/>
      <BarreRecherche/>
      <DescriptionPharmacie/>
      <Divider/>
      <NosServices/>
      <DevenirClient/>
      <AvisAutres/>
      <Contact/>
    </div>
  )
}

export default Accueil
