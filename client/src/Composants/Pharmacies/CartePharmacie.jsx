import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Pharmacies/pharmacie.png'


function CartePharmacie({element}) {

    useState(element.nomPharmacie)
    useState(element.numPharmacie)
    useState(element.wilayaPharmacie)
    useState(element.adressePharmacie)
  
  return ( 
    <div className='p-4 last-of-type:mb-8'>
      <div className='bg-[#0DC4C7] bg-opacity-25 w-full rounded-lg shadow-xl'> 
        <div className="card card-side flex-col md:flex-row lg:flex-row p-3">
          <figure><img className='w-96 rounded-xl p-3' src={image}/></figure>
          <div className="card-body bg-white rounded-lg text-[#203374] text-base m-2">
            <h2>Nom de la pharmacie : {element.nomPharmacie}</h2>
            <h2>Téléphone de la pharmacie : {element.numPharmacie}</h2>
            <h2>Adresse de la pharmacie : {element.adressePharmacie}, {element.wilayaPharmacie}</h2>
            <h2 className="text-sm"> Mail : {element.mail} </h2>
            <div className="card-actions justify-end">
              <Link to={'/PageUnePharmacie/'+element._id}>
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