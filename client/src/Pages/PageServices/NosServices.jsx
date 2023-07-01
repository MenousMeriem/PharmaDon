import React from 'react'
import HeroServices from '../../Composants/NosServices/HeroServices'
import Services from '../../Composants/NosServices/Services'
import Processus from '../../Composants/NosServices/Processus'
import AvisAutres from '../../Composants/Accueil/AvisAutres'

function NosServices() {
  return (
    <div>
        <HeroServices/>
        <Services/>
        <Processus/>
        <AvisAutres/>
    </div>
  )
}

export default NosServices