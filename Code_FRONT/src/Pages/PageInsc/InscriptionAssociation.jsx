import React from 'react'
import HeroInscAssociation from '../../Composants/Inscription/Association/HeroInscAssociation'
import TabInscAssociation from '../../Composants/Inscription/Association/TabInscAssociation'
import InformationsAssociationPersonnelles from '../../Composants/Inscription/Association/InformationsAssociationPersonnelles'

function InscriptionAssociation() {
  return (
    <div>
      <HeroInscAssociation/>
      <TabInscAssociation/>
      <InformationsAssociationPersonnelles/>
    </div>
  )
}

export default InscriptionAssociation