import React from 'react'
import Hero_Pharma from '../../Composants/Pharma/Hero_Pharma'
import Carte_Pharma from '../../Composants/Pharma/Carte_Pharma'
import Barre_Recherche from '../../Composants/Pharma/Barre_Recherche'

function PlusieursPharmacies() {
  return (
    <div>
        <Hero_Pharma/>
        <Barre_Recherche/>
        <Carte_Pharma/>
    </div>
  )
}

export default PlusieursPharmacies