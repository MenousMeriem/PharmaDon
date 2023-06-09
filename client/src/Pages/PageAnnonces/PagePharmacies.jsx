import React, {useState, useEffect} from 'react'
import HeroPharma from '../../Composants/Pharmacies/HeroPharma'
import BarreRecherche from '../../Composants/BarreRecherche'
import CartePharmacie from '../../Composants/Pharmacies/CartePharmacie'
import {toast} from 'react-toastify'
import axios from 'axios'

function PlusieursPharmacies({fetching, setFetching}) {
  const [data, setData] = useState([])   
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherPharmacie')
            setData(reponse.data)
        } catch (error) {
          toast.error(error.message)            
        }
    }
    useEffect(()=>{
        fetchData()
    }, [])

  return (
    <div>
        <HeroPharma/>
        <BarreRecherche/>
        {data.length && data.map(element => (
            <CartePharmacie key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
        ))} 
        
    </div>
  )
}

export default PlusieursPharmacies