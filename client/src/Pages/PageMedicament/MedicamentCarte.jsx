import React from 'react'
import image from '../../assets/Pharmacies/medicament.jpg'


function MedicamentCarte({element}) {

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
                <h2 className="text-lg font-bold btn"> {element.proprietaire.role} </h2> 
                <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
                <h2 className="text-sm"> numéro de téléphone : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.numPharmacie : element.proprietaire.role === "Association" ? element.proprietaire.numAsso : element.proprietaire.num } </h2> 
                <h2 className="text-sm"> nom de l{element.proprietaire.role === "Pharmacie" ? "a pharmacie" : element.proprietaire.role === "Association" ? "'association" : "u donnateur"} : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.adressePharmacie : element.proprietaire.role === "Association" ? element.proprietaire.adresseAsso : element.proprietaire.adresse } </h2> 
                <h2 className="text-sm"> Adresse : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.adressePharmacie : element.proprietaire.role === "Association" ? element.proprietaire.adresseAsso : element.proprietaire.adresse } </h2>    
                <div className="card-actions justify-end">
                <button className="border-b-2 border-black"> Signaler l'annonce </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MedicamentCarte