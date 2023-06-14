import React, {useState, useEffect} from 'react'
import Breadcrumbs from '../../Composants/Pharmacies/Breadcrumbs'
import Divider from '../../Composants/Pharmacies/Divider'
import CarteMedicament from '../../Composants/Pharmacies/CarteMedicament'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'

function UnePharmacie({fetching, setFetching}) {
  const [data, setData] = useState([])  
  console.log(data)
  const [loading, setLoading ] = useState(true)
  const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Annonce/afficherAnnonceAssociation')
            setData(reponse.data)

            console.log(reponse.data)
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
        <Breadcrumbs/>
        <Divider/>
        {data.length ? data.map(element => (
            <CarteMedicament key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
        )) : <h1> y pas </h1> } 
    </div>
  )
}

export default UnePharmacie