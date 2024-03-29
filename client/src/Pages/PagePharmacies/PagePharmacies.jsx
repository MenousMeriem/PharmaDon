import React, {useState, useEffect} from 'react'
import HeroPharma from '../../Composants/Pharmacies/HeroPharma'
import CartePharmacie from '../../Composants/Pharmacies/CartePharmacie'
import {toast} from 'react-toastify'
import axios from 'axios'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'

function PlusieursPharmacies({fetching, setFetching}) {
  const [data, setData] = useState([])  
   const [loading, setLoading ] = useState(true)
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherPharmacie')
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
        <HeroPharma/>
        {data.length ? data.map(element => (
            <CartePharmacie key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
        )) : <h1 className='text-3xl p-10 text-[#203374]'> y pas </h1> } 
        
    </div>
  )
}

export default PlusieursPharmacies