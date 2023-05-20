import React from 'react'
import HeroInscPharm from '../../Composants/Inscription/Pharmacien/HeroInscPharm'
import TabInscPharm from '../../Composants/Inscription/Pharmacien/TabInscPharm'
import InformationsPharmacienPersonnelles from '../../Composants/Inscription/Pharmacien/InformationsPharmacienPersonnelles'


function InscriptionPharmacien() {
  return (
    <div>
        <HeroInscPharm/>
        <TabInscPharm/>
        <InformationsPharmacienPersonnelles/>
    </div>
  )
}

export default InscriptionPharmacien