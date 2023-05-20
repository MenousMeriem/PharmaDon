import React from 'react'
import { useState } from 'react'

function InformationsPatientProfesionnelles() {
    const [sexe, setSexe] = useState("Homme")

    const onOptionChange = e => {
      setSexe(e.target.value)
    }

  return (
    <div>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-fit sm:p-10 sm:mt-10 sm:ml-40 sm:mb-10 m-5 p-5 ml-16'>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse de la pharmacie*</span>
                    </label>
                    <input type="text" placeholder="Wilaya" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    <input type="text" placeholder="Adresse exacte de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-xs mt-2" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse mail de la pharmacie*</span>
                    </label>
                    <input type="email" placeholder="Adresse mail" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            </div>      
            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div className='sm:grid sm:grid-rows-3'>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de téléphone de la pharmacie*</span>
                        </label>
                        <input type="tel" placeholder="Votre numéro " className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>  
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie du registre de commerce*</span>
                        </label>
                        <input type="file" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                </div>
            </div> 
            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie de votre carte d'identité recto-verso*</span>
                        </label>
                        <input type="file" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                </div>
            </div> 
            <div className='sm:grid sm:grid-cols-2'>
                <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                <div className='sm:grid sm:justify-items-end sm:mt-10 grid justify-center mt-5'>
                    <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"> Enregistrer </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformationsPatientProfesionnelles