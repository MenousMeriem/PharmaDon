import React, {useState} from 'react'
import image from '../../assets/NosServices/medic.png'
import axios from 'axios'
import {toast} from 'react-toastify'

function CarteAnnonce({element}) {

  // Affichage des informations : 
  useState(element.nomMedicament)
  useState(element.adresse) 
  useState(element.numTel) 
  useState(element.detail)

  

  // Modifications des informations : 
  const [nomMedicamentValue, setnomMedicamentValue] = useState(element.nomMedicament)
  const [adresseValue, setadresseValue] = useState(element.adresse)
  const [numTelValue, setnumTelValue] = useState(element.numTel)
  const [detailValue, setdetailValue] = useState(element.detail)
    // const [wilayaValue, setwilayaValue] = useState('')
   
  const currentUser = localStorage.getItem('Utilisateur')
  const currentUserObject = JSON.parse(currentUser)
  const config = {
      headers: {
          Authorization: `Bearer ${currentUserObject.accessToken}`
      }
  }

  const [modifier, setModifier] = useState(false)
  const [supprimer, setSupprimer] = useState(false)

    const handleUpdate = async () => {
      try {
        await axios.put('http://localhost:5000/Annonce/ModifierAnnonce/'+element._id, 
        {
            nomMedicament: nomMedicamentValue,
            adresse: adresseValue,
            numTel: numTelValue, 
            detail: detailValue,
            // wilaya: wilayaValue,
        }, config)
            window.location.reload()
            toast.success('Informations modifiés')
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const onDelete = async () => {
      const confirmation = confirm('Etes vous sur de supprimer cette annonce ?')
      if(!confirmation) return
      try {
          await axios.delete('http://localhost:5000/Annonce/SupprimerAnnonce/'+element._id, config)
          window.location.reload()
          toast.success('Annonce supprimé')
    } catch (error) {
      toast.error(error.response?.data?.message || error.message)   
    } 
  }
  

  return ( 
    <div>
        <div className="card card-side bg-base-100 shadow-xl flex flex-wrap p-10 m-10 border-4 border-[#0DC4C7]">
            <figure><img className='w-96 h-64' src={image}/></figure>
            <div className="card-body bg-[#0dc4c74d] rounded-lg text-[#203374] sm:p-10 sm:leading-10 sm:text-lg sm:font-bold">
                <h3>Nom du médicament : </h3>
                {modifier ? <input type="text" className="input input-bordered border-[#203374]" 
                value={nomMedicamentValue} onChange={e => setnomMedicamentValue(e.target.value)} /> : <h3> {element.nomMedicament} </h3>} 
                <h3>Numéro de téléphone : </h3>
                {modifier ? <input type="tel" className="input input-bordered border-[#203374]" 
                value={numTelValue} onChange={e => setnumTelValue(e.target.value)} /> : <h3>{element.numTel} </h3>} 
                <h3> Adresse : </h3>
                {modifier ? <input type="text" className="input input-bordered border-[#203374]" 
                value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h3>{element.adresse} </h3>} 
                <h3> Détail de l'annonce : </h3>
                {modifier ? <input type="text" className="input input-bordered border-[#203374]" 
                value={detailValue} onChange={e => setdetailValue(e.target.value)} /> : <h3>{element.detail} </h3>} 
                
                <div className="card-actions sm:justify-end justify-center mt-5">
                  {modifier ? <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
                  onClick={handleUpdate}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                  onClick={e=> setModifier(true)}> Modifier </button>}
                  
                  <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                  onClick={e => setModifier(false)}>Annuler</button> 
                  
                  {supprimer ? <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
                  onClick={onDelete}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                  onClick={e=> setSupprimer(true)}> Supprimer </button>}

                </div>
            </div>
        </div>
    </div>
  )
}

export default CarteAnnonce