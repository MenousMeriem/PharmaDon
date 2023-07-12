import React, {useState, useEffect} from 'react'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'
import ListUsers from '../../Composants/Dashboard/ListUsers'
// import { useParams } from 'react-router-dom'


function Utilisateurs({fetching, setFetching}) {
    // const {id} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Utilisateur/AfficherTsUtilisateur`)
            console.log(data)
            setData(reponse.data)
        } catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(loading) return ( <Lottie animationData={animation} /> )
 
 
    return (
        <div>
            <div>
                {data.utilisateurs && data.utilisateurs.length > 0 ? data.utilisateurs.map(element => (
                    <ListUsers key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
                    )) : <h1> Aucun utilisateur n'est disponible  </h1> } 
            </div>
        </div>
  )
}

export default Utilisateurs