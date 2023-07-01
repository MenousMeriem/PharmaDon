import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CarteAnnonce from '../../Composants/Pharmacies/CarteAnnonce'
import BarreRecherche from '../../Composants/BarreRecherche'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'


function Medicaments({fetching, setFetching}) {
    const {id} = useParams()
    const [data, setData] = useState([])  
    const [loading, setLoading ] = useState(true)
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Annonce/afficherAnnoncePharmacien/'+id)
            // const reponse = await axios.get('http://localhost:5000/Annonce/afficherAnnonceAssociation/'+id)
            // const reponse = await axios.get('http://localhost:5000/Annonce/afficherAnnoncePatient/'+id)

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

    if(loading) return ( <Lottie animationData={animation} /> )

  return (
    <div>
        <BarreRecherche/>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
          {data.length ? data.map(element => (
              <CarteAnnonce key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
          )) : <h1> Aucun médicament n'est disponible  </h1> } 
        </div>
        {/* <CarteAnnoncee/> */}
    </div>
  )
}

export default Medicaments