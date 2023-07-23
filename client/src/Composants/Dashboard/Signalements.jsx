import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import SingleCardSignalement from './SingleCardSignalement'

function Signalements() {

  // Recupération du token : 
  const currentUser = localStorage.getItem('Utilisateur')
  const currentUserObject = JSON.parse(currentUser)
  const config = {
    Headers: {
      Authorization : `Barrer ${currentUserObject.accessToken}`
    }
  }

  // Affichage des signalements : 
    const [loading,setLoading] = useState(false)
    const [data, setData] = useState([])

useEffect(()=> {
  const afficherSignalements = async () => {
    setLoading(true)
    try{
      const reponse = await axios.get('http://localhost:5000/Annonce/AfficherSignalements', config)
      console.log(reponse.data)
      if(reponse.data){
        setData(reponse.data) 
        console.log(reponse.data)
      }
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
  }
    afficherSignalements()
    },[])
 
  return (
    <div className='w-full'>
      <h1 className='p-10 text-[#203374] font-black text-3xl bg-[#e1ecf7] border-[#203374] border-b-4 rounded-b-2xl'> Liste des signalements  </h1>
      <div className="overflow-x-auto p-5 grid grid-cols-2 gap-4 ">
        {data.map((element, index) => ( 
          <SingleCardSignalement key={index}  element={element}/>
        ))}
      </div>            
    </div>
  )
}

export default Signalements