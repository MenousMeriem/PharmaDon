import React from 'react'

function MedicamentCarte({element}) {
  return (
    <div className='p-10 '>
        <div className="card card-compact bg-base-100 shadow-xl w-80 lg:w-96 lg:h-full text-[#203374]">
            {element.categorie ==='Demande' ? (
              <span className="indicator-item badge badge-primary w-full h-10 bg-[#203374] rounded-md">Demande</span> 
            ):( 
              <span className="indicator-item badge badge-primary w-full h-10 bg-[#e3582a] border-none rounded-md">Don</span> 
            )}
            <figure><img src={`http://localhost:5000/images/${element.image}`}/></figure>
            <div className="card-body m-5">
                {element.proprietaire.role === "Pharmacie" ?  <h2 className="text-lg font-bold btn bg-[#219EBC] border-none"> Pharmacie </h2> : element.proprietaire.role === "Association" ? <h2 className="text-lg font-bold btn bg-[#203374] border-none">Association </h2>: "Donneur"}  
                <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
                <h2 className="text-sm"> Numéro de téléphone : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.numPharmacie : element.proprietaire.role === "Association" ? element.proprietaire.numAsso : element.proprietaire.num } </h2> 
                <h2 className="text-sm"> Nom de l{element.proprietaire.role === "Pharmacie" ? "a pharmacie" : element.proprietaire.role === "Association" ? "'association" : "u donnateur"} : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.adressePharmacie : element.proprietaire.role === "Association" ? element.proprietaire.adresseAsso : element.proprietaire.adresse } </h2> 
                <h2 className="text-sm"> Adresse : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.adressePharmacie : element.proprietaire.role === "Association" ? element.proprietaire.adresseAsso : element.proprietaire.adresse } </h2>    
                <div className="card-actions justify-center">
                  <button className="border-b-2 border-black"> Signaler l'annonce </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MedicamentCarte