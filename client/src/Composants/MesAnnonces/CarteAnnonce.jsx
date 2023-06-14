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

    // Supprimer une annonce :
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
    
      <div className='px-10 pb-9'>
      
        <div className="card card-side bg-base-100 shadow-xl flex flex-wrap px-2 pb-2 border-4 border-[#0DC4C7]">
          <figure className=''><img className='w-72 h-64' src={image}/></figure>
          <div className="card-body bg-[#0dc4c74d] rounded-lg text-[#203374] md:mt-2 ">
              <div className='w-full lg:flex border-b border-[#0DC4C7] p-5 '>
                <div className='lg:flex lg:items-center lg:gap-2'>
                  <h6 className=''>Nom du médicament : </h6>
                  {modifier ? <input type="text" className="input input-bordered border-[#203374] md:w-fit lg:w-fit" 
                  value={nomMedicamentValue} onChange={e => setnomMedicamentValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {element.nomMedicament} </h3>} 
                </div>
              </div>
              <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='lg:flex lg:items-center lg:gap-2'>
                    <h6>Numéro de téléphone : </h6>
                    {modifier ? <input type="tel" className="input input-bordered border-[#203374] md:w-fit lg:w-fit" 
                    value={numTelValue} onChange={e => setnumTelValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.numTel} </h3>} 
                </div>
              </div>
              <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='lg:flex lg:items-center lg:gap-2'>
                  <h3> Adresse : </h3>
                  {modifier ? <input type="text" className="input input-bordered border-[#203374] md:w-fit lg:w-fit" 
                  value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.adresse} </h3>} 
                </div>
              </div>
              <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='lg:flex lg:items-center lg:gap-2'>
                  <h3> Détail de l'annonce : </h3>
                  {modifier ? <input type="text" className="input input-bordered border-[#203374] md:w-fit lg:w-fit" 
                  value={detailValue} onChange={e => setdetailValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {element.detail} </h3>} 
                </div>
              </div>
              <div className="card-actions justify-center">
                {modifier ? <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
                onClick={handleUpdate}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                onClick={e=> setModifier(true)}> Modifier </button>}
                
                {/* <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                onClick={e => setModifier(false)}>Annuler</button>  */}
                
                {supprimer ? <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40 " 
                onClick={onDelete}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                onClick={e=> setSupprimer(true)}> Supprimer </button>}
              </div>
            </div>
        </div>
      </div>
  )
}

export default CarteAnnonce