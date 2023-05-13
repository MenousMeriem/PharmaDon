import React from 'react'
import Hero_Insc from '../../Composants/Inscription/Hero_Insc'
import Tab_Insc from '../../Composants/Inscription/Tab_Insc'
import Form_Perso from '../../Composants/Inscription/Form_Perso'
import Form_Profs from '../../Composants/Inscription/Form_Profs'

function Inscription() {
  return (
    <div>
        <Hero_Insc/>
        <Tab_Insc/>
        <Form_Perso/>
        <Form_Profs/>
    </div>
  )
}

export default Inscription