import React, {useState} from 'react'
import image from '../../assets/Pharmacies/medicament.jpg'

function CarteMedicament({element}) {

    useState(element.nomMedicament)
    useState(element.numTel)
    useState(element.adresse)
    useState(element.detail)
    useState(element.categorie)
 
  return (
    <div className='px-10 py-10'>
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-10 text-[#203374]">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title"> Nom du médicament : {element.nomMedicament} </h2> 
                <h2 className="card-title"> Numéro de télephone : {element.numTel} </h2> 
                <h2 className="card-title"> Adresse de récupération : {element.adresse} </h2> 
                <h2 className="card-title"> Détail : {element.detail} </h2> 
                <h2 className="card-title"> Type : {element.categorie} </h2> 
                <div className="card-actions justify-end">
                  <button className="btn bg-[#0DC4C7] border-none">Commander</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarteMedicament