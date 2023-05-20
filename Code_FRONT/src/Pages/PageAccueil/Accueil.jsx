import React from 'react'
import Hero from '../../Composants/Accueil/Hero'
import Cartes from '../../Composants/Accueil/Cartes'
import BarreRecherche from '../../Composants/Accueil/BarreRecherche'
import DevenirClient from '../../Composants/Accueil/DevenirClient'

function Accueil() {
  return (
    <div>
        <Hero/>
        <Cartes/>
        <BarreRecherche/>
        <DevenirClient/>
    </div>
  )
}

export default Accueil
