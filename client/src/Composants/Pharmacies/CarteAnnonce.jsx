import React, { useState } from 'react'
import image from '../../assets/Pharmacies/medicament.jpg'
import axios from 'axios'
import { toast } from 'react-toastify'

function CarteAnnonce({element}) { 

  // const handleOnClick = async() => {
  //   const user = localStorage.getItem('Utilisateur')
  //   const currentUserObject = JSON.parse(user)
  //   const config = {
  //     headers: {
  //         Authorization: `Bearer ${currentUserObject.accessToken}`
  //     }
  // } 
  //   try {
  //     await axios.put('http://localhost:5000/Annonce/signalerAnnonce/'._id, signalement, config)
  //     toast.success('Publication signalée')
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || message.error)
  //   }
  // }

  return (
    <div className='p-10 '>
        <div className="card card-compact bg-base-100 shadow-xl w-80 lg:w-96 lg:h-full text-[#203374]">
            {element.categorie ==='Demande' ? (
            <span className="indicator-item badge badge-primary w-full h-10 bg-[#203374] rounded-md">Demande</span> 
            ):( 
           <span className="indicator-item badge badge-primary w-full h-10 bg-[#219EBC] border-[#219EBC] rounded-md">Don</span> 
           )}
            
            <figure><img className='w-60' src={image}/></figure>
            <div className="card-body m-5">
                <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
                <h2 className="text-sm"> Numéro de télephone : {element.numTel} </h2> 
                <h2 className="text-sm"> Adresse de récupération : {element.adresse} </h2> 
                <h2 className="text-sm"> Détail : {element.detail} </h2> 
                <h2 className="text-sm"> Type : {element.categorie} </h2> 
                <div className="card-actions justify-end">
                  <button className="border-b-2 border-black"> Signaler l'annonce</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarteAnnonce