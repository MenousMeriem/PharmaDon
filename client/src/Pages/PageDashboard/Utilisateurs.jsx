import React, {useState, useEffect} from 'react'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'
import ListUsers from '../../Composants/Dashboard/ListUsers'
// import { useParams } from 'react-router-dom'


function Utilisateurs({fetching, setFetching}) {
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    } 

    // const {id} = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Utilisateur/AfficherTsUtilisateurs`, config)
            // console.log(reponse.data)
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
        <div className='w-full'>
            <h1 className='p-10 text-white font-bold text-lg bg-[#203374]'>Liste des utilisateurs </h1>
            <div className="overflow-x-auto py-5 rounded-none">
                <table className="table table-xs w-full">
                    <thead>
                        <tr className=''>
                            <th className=' bg-slate-400'></th>
                            <th className='text-white bg-slate-400 text-sm'>Nom</th>
                            <th className='text-white bg-slate-400 text-sm'>Prenom</th>
                            <th className='text-white bg-slate-400 text-sm'>Role</th>    
                            <th className='text-white bg-slate-400 text-sm'>Activer/Desactiver</th>    
                            <th className='text-white bg-slate-400 text-sm'>Supprimer</th>    
                        </tr>
                        
                    </thead>
                    <tbody className='text-[#203374]'>  
                        {data && data.length > 0 ? data.map(element => (
                            <ListUsers key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
                            )) : <h1> Aucun utilisateur n'est disponible  </h1> } 
                    </tbody>
                </table>
            </div>
        </div>
     

  )
}

export default Utilisateurs