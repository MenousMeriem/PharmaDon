import React from 'react'
import { Link } from 'react-router-dom'
function Tab_Insc() {
  return (
    <div>
        <div className="tabs sm:flex sm:justify-center grid grid-cols-2  ">
            <Link to={'/InformationsPharmacienPersonnelles'}className="tab tab-bordered tab-active text-[#0DC4C7] sm:mr-16 sm:font-extrabold text-xs"> 1. Informations personnelles </Link> 
            <Link to={'/InformationsPharmacienProfesionnelles'}className="tab tab-bordered text-[#203374] sm:mr-16 text-xs py-2">2. Informations profesionnelles </Link> 
            {/* <Link className="tab tab-bordered text-[#203374]">3. Informations supplémentaires </Link> */}
        </div>
    </div>
  )
}

export default Tab_Insc