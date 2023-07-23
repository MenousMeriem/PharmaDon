import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function MedicamentCarte({element}) {
  
  const raisons = Object.freeze(
    ["Je pense que cette annonce pourrait être une tentative de vente illégale de médicaments, ce qui est contraire aux politiques de la plateforme", 
    "Cette annonce semble proposer des médicaments contrefaits ou de qualité douteuse, ce qui peut présenter des risques pour la santé des bénéficiaires.", 
    "Je crois que cette annonce viole les règles de votre plateforme en proposant des médicaments restreints ou interdits."]) 


  const [raison, setRaison] = useState('')

  const onChange = (e) => {
    setRaison(e.target.value)
  }

  
  const handleOnClick = async() => {
    try {
      await axios.put('http://localhost:5000/Annonce/signalerAnnonce/'+element._id, {raison})
        toast.success('Publication signalée')
    } catch (error) {
        toast.error(error.response?.data?.message || error.message)
    }
  }
  console.log(element.idAnnonce.categorie)
  return (
    <div className='p-10'>
        <div className="card card-compact bg-base-100 shadow-xl w-80 lg:w-96 lg:h-full text-[#203374]">
            {element.idAnnonce.categorie ==='Demande' ? (
               <span className="indicator-item badge badge-primary w-fit h-10 bg-[#203374] rounded-md">Demande</span> 
               ):( 
               <span className="indicator-item badge badge-primary w-fit h-10 bg-[#219EBC] border-[#219EBC] rounded-md">Don</span>  
            )}
            <figure className='p-5'><img className='w-96 h-96 rounded-lg' src={`http://localhost:5000/images/${element.image}`}/></figure>
            <div className="card-body m-5">
              {element.proprietaire.role === "Pharmacie" ?  <h2 className="text-lg font-bold btn bg-[#219EBC] border-none"> Pharmacie </h2> : element.proprietaire.role === "Association" ? <h2 className="text-lg font-bold btn bg-[#203374] border-none">Association </h2>: <h2 className="text-lg font-bold btn bg-teal-400 border-none">Patient </h2>}  
                <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
                <h2 className="text-sm"> Numéro de téléphone : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.numPharmacie : element.proprietaire.role === "Association" ? element.proprietaire.numAsso : element.proprietaire.numtel } </h2> 
                <h2 className="text-sm"> Nom de l{element.proprietaire.role === "Pharmacie" ? "a pharmacie" : element.proprietaire.role === "Association" ? "'association" : "donnateur"} : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.nomPharmacie : element.proprietaire.role === "Association" ? element.proprietaire.nomAsso : (element.proprietaire.nom && element.proprietaire.prenom) } </h2> 
                <h2 className="text-sm"> Adresse : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.adressePharmacie : element.proprietaire.role === "Association" ? element.proprietaire.adresseAsso : element.proprietaire.adresse} </h2>    
                <h2 className="text-sm"> Wilaya : {element.proprietaire.role === "Pharmacie" ? element.proprietaire.wilaya : element.proprietaire.role === "Association" ? element.proprietaire.wilaya : element.proprietaire.wilaya} </h2>    
                <div className='m-8 flex justify-center'>
              <label htmlFor="my_modal_7" className="text-red-600 text-base font-blacK underline">Signaler l'annonce</label>
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box leading-10 p-4">
                  <div className="form-control">
                    <label className="label cursor-pointer" htmlFor='option0'>
                      <input type="radio" name='radio' id='option0' value={raisons[0]} onChange={onChange} />
                      <span className="label-text"> {raisons[0]}</span> 
                    </label>
                  </div>  
                  <div className="form-control">
                    <label className="label cursor-pointer" htmlFor='option1'>
                      <input type="radio" name='radio' id='option1' value={raisons[1]} onChange={onChange}/>
                      <span className="label-text"> {raisons[1]} </span> 
                    </label>
                  </div>  
                  <div className="form-control">
                    <label className="label cursor-pointer" htmlFor='option2'>
                      <input type="radio" name='radio' id='option2' value={raisons[2]} onChange={onChange}/>
                      <span className="label-text"> {raisons[2]}</span> 
                    </label>
                  </div>         
                  <div className="modal-action justify-center">
                    <label onClick={handleOnClick} className="btn bg-green-400 border-none">Signaler</label>
                    <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MedicamentCarte