import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/PlusieursPharmacies/pharmacie.png'


function Carte_Pharma() {
  return (
    <div>
      <div className='bg-[#0DC4C7] bg-opacity-25 w-full py-8 px-10 rounded-lg mt-10'> 
        <div className="card card-side w-full px-5 ">
          <figure><img className='w-64 h-60 rounded-lg' src={image}/></figure>
          <div className="card-body bg-white ml-4 rounded-lg text-[#203374] ">
            <h2 className="card-title">Nom de la pharmacie</h2>
            <p> Adresse complete de la pharmacie </p>
            <p> Horaires et jours de travail  </p>
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

export default Carte_Pharma