import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function InformationsPatientPersonnelles() {
    const [sexe, setSexe] = useState("Homme")

    const onOptionChange = e => {
        setSexe(e.target.value)
    }

  return (
    <div>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-fit sm:p-10 sm:mt-10 sm:ml-40 sm:mb-10 m-5 p-5 ml-16'>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 '>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Nom*</span>
                    </label>
                    <input type="text" placeholder="Votre nom" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Prénom*</span>
                    </label>
                    <input type="text" placeholder="Votre prénom" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            </div>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Date de naissance*</span>
                    </label>
                    <input type="date" placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Sexe*</span>
                    </label>
                    <input className='mr-2 ml-2' type="radio" name='sexe'value="Homme" id="homme" checked={sexe === "Homme"} onChange={onOptionChange} />
                    <label className='mr-24' htmlFor="Homme">Homme</label>
                    <input className='mr-2' type="radio" name="sexe" value="Femme" id="femme" checked={sexe === "Femme"} onChange={onOptionChange} />
                    <label htmlFor="medium">Femme</label>
                </div>
            </div>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                <div className='sm:grid sm:grid-rows-3'>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Numéro de téléphone*</span>
                    </label>
                    <input type="tel" placeholder="Votre numéro de téléphone" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>  
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse mail*</span>
                    </label>
                    <input type="email" placeholder="Votre adresse mail" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            </div>      
            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse*</span>
                        </label>
                        <input type="text" placeholder="Votre wilaya" className="input input-bordered border-[#203374] w-full max-w-xs" />
                        <input type="text" placeholder="Votre adresse exacte" className="input input-bordered border-[#203374] w-full max-w-xs mt-1" />
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Mot de passe*</span>
                        </label>
                        <input type="password" placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-xs" />
                        <input type="password" placeholder="Mot de passe confirmé" className="input input-bordered border-[#203374] w-full max-w-xs mt-1" />
                    </div>
                </div>
            </div> 
            <div className='sm:grid sm:grid-cols-2'>
                <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                <div className='sm:grid sm:justify-items-end sm:mt-10 mt-5 grid justify-center'>
                    <Link to={'/InformationsPharmacienProfesionnelles'}>
                        <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40">Suivant </button>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default InformationsPatientPersonnelles