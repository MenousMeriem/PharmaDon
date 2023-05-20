import React from 'react'
import HeroInscPatient from '../../Composants/Inscription/Patient/HeroInscPatient'
import InformationsPatientPersonnelles from '../../Composants/Inscription/Patient/InformationsPatientPersonnelles'
import TabInscPatient from '../../Composants/Inscription/Patient/TabInscPatient'

function InscriptionPatient() {
  return (
    <div>
      <HeroInscPatient/>
      <TabInscPatient/>
      <InformationsPatientPersonnelles/>
    </div>
  )
}

export default InscriptionPatient