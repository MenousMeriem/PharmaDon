import React from 'react'
import image from '../../../../assets/NosServices/medic.png'

function CarteAnnonce() {
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl flex flex-wrap p-10 m-10 border-4 border-[#0DC4C7]">
            <figure><img className='w-96 h-64' src={image}/></figure>
            <div className="card-body bg-[#0dc4c74d] rounded-lg text-[#203374] sm:p-10 sm:leading-10 sm:text-lg sm:font-bold">
                <h3> Nom du médicament : </h3>
                <h3> Numéro de téléphone : </h3>
                <h3> Adresse : </h3>
                <h3> Détail : </h3>
                <div className="card-actions sm:justify-end justify-center mt-5">
                    <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40">Modifier </button>
                    <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40">Supprimer </button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default CarteAnnonce