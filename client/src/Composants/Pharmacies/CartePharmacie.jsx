import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Pharmacies/pharmacie.png'


function CartePharmacie({element}) {

    useState(element.nomPharmacie)
    useState(element.numPharmacie)
    useState(element.wilayaPharmacie)
    useState(element.adressePharmacie)
  
  return ( 
    <div>
      <div className='bg-[#0DC4C7] bg-opacity-25 w-full py-8 px-10 rounded-lg mt-10'> 
        <div className="card card-side w-full px-5 ">
          <figure><img className='w-64 h-60 rounded-lg' src={image}/></figure>
          <div className="card-body bg-white ml-4 rounded-lg text-[#203374] text-lg font-bold">
            <h2>Nom de la pharmacie : {element.nomPharmacie}</h2>
            <h2>Téléphone de la pharmacie : {element.numPharmacie}</h2>
            <h2>Adresse de la pharmacie : {element.adressePharmacie}, {element.wilayaPharmacie}</h2>
            <div className="card-actions justify-end">
              <Link to={'/UnePharmacie'}>
                <button className="btn bg-[#0DC4C7] border-none">Détail</button>
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartePharmacie