import {useState, useEffect} from 'react'
import CarteAnnonce from './CarteAnnonce'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import axios from 'axios'
import {toast} from 'react-toastify'
import AjoutAnnonce from './AjoutAnnonce'

function MesAnnonces({fetching, setFetching}) { 
  const [refetch, setRefetch] = useState(false)
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
  }, [refetch])

  if(loading) return ( <Lottie animationData={animation} /> )

  return (
    <div>
      <div className='flex justify-center'>
        <label htmlFor="my_modal_7" className="btn bg-[#203374] text-white text-base text-center font-black">Ajouter une annonce</label>
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-0">
          <AjoutAnnonce refetch={refetch} setRefetch={setRefetch}/>
          <div className="modal-action flex justify-center">
            <label htmlFor="my_modal_7" className="btn bg-red-600 border-none text-white">Fermer</label>
          </div>
        </div>
      </div>
      <h1 className='text-[#203374] text-xl text-center font-black p-5 lg:text-3xl lg:mt-10 '> Mes annonces</h1>
      <div className='grid grid-cols-3 gap-9 p-5'>
        {data.length ? data.map(element => (
          <CarteAnnonce key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
        )) : <h1 className='text-3xl p-10 text-[#203374]'> Aucune annonce n'est disponible ! </h1> }   
      </div>
    </div>      
  )
}

export default MesAnnonces