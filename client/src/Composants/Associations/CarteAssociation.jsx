import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Pharmacies/pharmacie.png'


function CarteAssociation({element}) {

    useState(element.nomAsso)
    useState(element.numAsso)
    useState(element.adresseAsso)
    useState(element.wilayaAsso)
 
  return ( 
    <div>
      <div className='bg-[#0DC4C7] bg-opacity-25 w-full py-8 px-10 rounded-lg mt-10'> 
        <div className="card card-side w-full px-5 ">
          <figure><img className='w-64 h-60 rounded-lg' src={image}/></figure>
          <div className="card-body bg-white ml-4 rounded-lg text-[#203374] font-bold text-lg ">
            <h2>Nom de l'association : {element.nomAsso}</h2>
            <h2>Téléphone de l'association : {element.numAsso}</h2>
            <h2> Adresse de l'association : {element.adresseAsso}, {element.wilayaAsso} </h2>
            <div className="card-actions justify-end">
              <Link to={'/PageUneAssociation'}>
                <button className="btn bg-[#0DC4C7] border-none">Détail</button>
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarteAssociation