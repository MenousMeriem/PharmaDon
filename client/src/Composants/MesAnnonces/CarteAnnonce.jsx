import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import  defualtImage from "../../assets/Pharmacies/image1.jpg"

function CarteAnnonce({element}) {

  // Modifications des informations : 
  const [nomMedicamentValue, setnomMedicamentValue] = useState(element.idMedicament[0].nomMedicament)
  const [wilayaValue, setwilayaValue] = useState(element.wilaya)
  const [numTelValue, setnumTelValue] = useState(element.numTel)
  const [detailValue, setdetailValue] = useState(element.detail)
   
  const currentUser = localStorage.getItem('Utilisateur')
  const currentUserObject = JSON.parse(currentUser)
  const config = {
      headers: {
          Authorization: `Bearer ${currentUserObject.accessToken}`
      }
  }

  const [modifier, setModifier] = useState(false)

    const handleUpdate = async () => {
      try {
        await axios.put('http://localhost:5000/Annonce/ModifierAnnonce/'+element._id, 
        {
            idMedicament: element.idMedicament[0]._id,  
            nomMedicament: nomMedicamentValue,
            wilaya: wilayaValue,
            numTel: numTelValue, 
            detail: detailValue,
        }, config)
            toast.success('Informations modifiés')
            setModifier(false)
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
    
      <div className='p-5'>
          <div className="card w-96 bg-base-100 shadow-xl p-5">
            <figure className='rounded-xl'><img className='w-96 h-96 p-3' src={element.idMedicament[0].image ? `http://localhost:5000/images/${element.idMedicament[0].image.toString()}`: defualtImage}/></figure>
            <div className="card-body bg-[#219EBC] rounded-lg overflow-y-auto h-64 text-white">
              <h1 className='font-black'>Nom du médicament : </h1>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] text-[#203374]" 
              value={nomMedicamentValue} onChange={e => setnomMedicamentValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {nomMedicamentValue} </h3>} 
              <h1 className='font-black'>Numéro de téléphone : </h1>
              {modifier ? <input type="tel" className="input input-bordered border-[#203374] text-[#203374] " 
              value={numTelValue} onChange={e => setnumTelValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light '>{element.numTel} </h3>} 
              <h1 className='font-black'> Adresse : </h1>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] text-[#203374]" 
              value={wilayaValue} onChange={e => setwilayaValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light '>{element.wilaya}</h3>} 
              <h1 className='font-black'> Détail de l'annonce : </h1>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] text-[#203374] " 
              value={detailValue} onChange={e => setdetailValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {element.detail} </h3>} 
            </div>
            <div className="card-actions justify-center lg:mt-5">
              {modifier ? 
                <div className='flex items-center justify-between w-full'>
                  <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
                  onClick={handleUpdate}> Confirmer </button>
                  <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
                  onClick={()=> setModifier(false)}> Annuler </button>  
                </div> : <div className='flex items-center justify-between w-full'>
                  <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
                  onClick={()=> setModifier(true)}> Modifier </button>  
                  <button className="btn bg-red-600 text-white border-none sm:text-lg sm:w-40" 
                  onClick={onDelete}> Supprimer </button>  
                </div> } 
            </div>
          </div>
      </div>

  )
}

export default CarteAnnonce