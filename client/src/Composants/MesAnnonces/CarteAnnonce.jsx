import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import  defualtImage from "../../assets/Pharmacies/image1.jpg"

function CarteAnnonce({element}) {

  // Modifications des informations : 
  const [nomMedicamentValue, setnomMedicamentValue] = useState(element.idMedicament[0].nomMedicament)
  const [adresseValue, setadresseValue] = useState(element.adresse)
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
            adresse: adresseValue,
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
            <figure className='rounded-xl'><img className='w-96 h-96 p-3 ' src={element.idMedicament[0].image ? `http://localhost:5000/images/${element.idMedicament[0].image.toString()}`: defualtImage}/></figure>
            <div className="card-body bg-[#219EBC] text-white rounded-lg">
              <h6 className=''>Nom du médicament : </h6>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
              value={nomMedicamentValue} onChange={e => setnomMedicamentValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {nomMedicamentValue} </h3>} 
              <h6>Numéro de téléphone : </h6>
              {modifier ? <input type="tel" className="input input-bordered border-[#203374] h-10" 
              value={numTelValue} onChange={e => setnumTelValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.numTel} </h3>} 
              <h3> Adresse : </h3>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
              value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.adresse}</h3>} 
              <h3 className='w-fit text-justify'> Détail de l'annonce : </h3>
              {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
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


      // <div className='p-2 flex justify-center mb-10'>
      //   <div className="card card-side lg:w-3/4 lg:flex lg:justify-between bg-base-100 shadow-xl flex flex-wrap justify-between border-4 border-[#0DC4C7] p-2">
      //     <section className='w-1/2 text-[#203374]'>
      //       <figure className='rounded-lg lg:mx-5'><img className='' src={element.idMedicament[0].image ? `http://localhost:5000/images/${element.idMedicament[0].image.toString()}`: defualtImage}/></figure>
      //     </section>
      //     <section className='bg-[#0dc4c72c] flex flex-col justify-between rounded-lg text-[#203374] lg:h-full lg:leading-10 lg:w-1/2'>   
      //       <div className="card-body justify-between">
      //         <div className='flex border-b border-[#0DC4C7]'>
      //           <div className='lg:flex lg:items-center lg:gap-2'>
      //             <h6 className=''>Nom du médicament : </h6>
      //             {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
      //             value={nomMedicamentValue} onChange={e => setnomMedicamentValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {nomMedicamentValue} </h3>} 
      //           </div>
      //         </div>
      //         <div className='flex border-b border-[#0DC4C7]'>
      //           <div className='lg:flex lg:items-center lg:gap-2'>
      //               <h6>Numéro de téléphone : </h6>
      //               {modifier ? <input type="tel" className="input input-bordered border-[#203374] h-10" 
      //               value={numTelValue} onChange={e => setnumTelValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.numTel} </h3>} 
      //           </div>
      //         </div>
      //         <div className='flex border-b border-[#0DC4C7]'>
      //           <div className='lg:flex lg:items-center lg:gap-2'>
      //             <h3> Adresse : </h3>
      //             {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
      //             value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'>{element.wilaya} </h3>} 
      //           </div>
      //         </div>
      //         <div className='flex border-b border-[#0DC4C7] '>
      //           <div className='lg:flex flex-col lg:items-center lg:gap-2'>
      //             <h3 className='w-fit text-justify'> Détail de l'annonce : </h3>
      //             {modifier ? <input type="text" className="input input-bordered border-[#203374] h-10" 
      //             value={detailValue} onChange={e => setdetailValue(e.target.value)} /> : <h3 className='lg:tracking-widest lg:font-light'> {element.detail} </h3>} 
      //           </div>
      //         </div>
      //         <div className="card-actions justify-center lg:mt-5">
      //           {modifier ? 
      //           <div className='flex items-center justify-between w-full'>
      //             <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
      //             onClick={handleUpdate}> Confirmer </button>
      //             <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
      //             onClick={()=> setModifier(false)}> Annuler </button>  
      //           </div> : <div className='flex items-center justify-between w-full'>
      //             <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
      //              onClick={()=> setModifier(true)}> Modifier </button>  
      //             <button className="btn bg-red-600 text-white border-none sm:text-lg sm:w-40" 
      //              onClick={onDelete}> Supprimer </button>  
      //           </div> } 
      //         </div>
      //       </div>
      //     </section>
      //   </div>
      // </div>
  )
}

export default CarteAnnonce