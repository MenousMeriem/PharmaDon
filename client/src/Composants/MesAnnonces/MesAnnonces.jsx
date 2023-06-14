import React, {useState, useEffect} from 'react'
import CarteAnnonce from './CarteAnnonce'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import axios from 'axios'
import {toast} from 'react-toastify'
import AjoutAnnonce from './AjoutAnnonce'

function MesAnnonces({fetching, setFetching}) { 
  const currentUser = localStorage.getItem('Utilisateur')
  const currentUserObject = JSON.parse(currentUser)
  const config = {
      headers: {
          Authorization: `Bearer ${currentUserObject.accessToken}`
      }
  }
  const [data, setData] = useState([])  
  const [loading, setLoading ] = useState(true)
  const fetchData = async() => {
      try {
          const reponse = await axios.get('http://localhost:5000/Annonce/AfficherAnnonceUserCourant', config)
          setData(reponse.data)
      } catch (error) {
        toast.error(error.message)            
      }
      finally {
        setLoading(false)
      }
  }
  useEffect(()=>{
      fetchData() 
  }, [])
  console.log(data)

  if(loading) return ( <Lottie animationData={animation} /> )
  return (
    <div>      
    
      <h1 className='text-lg text-center text-[#203374] mt-5 sm:text-4xl sm:mt-14 py-10 px-20'> Ajouter une annonce </h1>
      {/* <button className="btn" onClick={()=>my_modal_3.showModal()}>open modal</button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </form>
        </dialog> */}
      <AjoutAnnonce/>

      <h1 className='text-lg text-center text-[#203374] mt-5 sm:text-4xl sm:mt-14 py-10 px-20'> Mes annonces </h1>
      {data.length ? data.map(element => (
        <CarteAnnonce key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
      )) : <h1 className='text-3xl p-10 text-[#203374]'> Aucune annonce n'est disponible ! </h1> }   
    </div>      
  )
}

export default MesAnnonces