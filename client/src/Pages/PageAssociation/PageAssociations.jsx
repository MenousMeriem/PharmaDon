import React, {useState, useEffect} from 'react'
import BarreRecherche from '../../Composants/BarreRecherche'
import HeroAssociation from '../../Composants/Associations/HeroAssociation'
import CarteAssociation from '../../Composants/Associations/CarteAssociation'
import animation from '../../assets/Annimations/102003-medicine.json'
import {toast} from 'react-toastify'
import axios from 'axios'
import Lottie from 'lottie-react'

function PageAssociations({fetching, setFetching}) {
    const [data, setData] = useState([])  
    const [loading, setLoading ] = useState(true)
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherAssociation')
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
        <HeroAssociation/>
        <BarreRecherche/>
        {data.length ? data.map(element => (
            <CarteAssociation key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
        )) : <h1 className='text-3xl p-10 text-[#203374]'> Aucune association n'est disponible ! </h1> } 
    </div>
  )
}

export default PageAssociations