import React from 'react'
import Hero from '../../Composants/Accueil/Hero'
import NosServices from '../../Composants/Accueil/NosServices'
import BarreRecherche from '../../Composants/Accueil/BarreRecherche'
import DevenirClient from '../../Composants/Accueil/DevenirClient'
import DescriptionPharmacie from '../../Composants/Accueil/DescriptionPharmacie'
import {BsFillChatDotsFill} from "react-icons/bs"
import { Link } from 'react-router-dom'


function Accueil() {
  return (
    <div className='relative'>
        <Link to={'/PageProfilPharmacien'}>
          <button className='bg-red-200 text-black btn'>Profil Pharmacien</button>
        </Link>
        <Link to={'/PageProfilAdmin'}>
          <button className='bg-red-200 text-black btn'>Profil Admin</button>
        </Link>
        <div className="h-20 w-20 fixed bottom-8 right-8 z-50"><BsFillChatDotsFill className="w-2/3 h-2/3 fill-blue-900"/></div>
        <Hero/>
        <BarreRecherche/>
        <DescriptionPharmacie/>
        <NosServices/>
        <DevenirClient/>
    </div>
  )
}

export default Accueil