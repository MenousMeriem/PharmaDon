import React from 'react'
import Breadcrumbs from '../../Composants/Pharma/Breadcrumbs'
import Hero_Pharma from '../../Composants/Pharma/Hero_Pharma'
import Divider from '../../Composants/Pharma/Divider'
import Barre_Recherche from '../../Composants/Pharma/Barre_Recherche'

function UnePharmacie() {
  return (
    <div>
        <Breadcrumbs/>
        <Hero_Pharma/>
        <Divider/>
        <Barre_Recherche/>
    </div>
  )
}

export default UnePharmacie