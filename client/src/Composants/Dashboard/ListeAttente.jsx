import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function ListeAttente() {

    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    } 

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Utilisateur/afficherDetailUsers`, config)
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

    console.log(data)

    // if(loading) return ( <Lottie animationData={animation} /> )


  return (
    <div className='w-full'>
        <h1 className='p-10 text-white font-bold text-lg bg-[#203374] '>Liste d'attente </h1>
        <div className="overflow-x-auto py-5 rounded-none">
            <table className="table table-xs w-full">
                <thead>
                    <tr className=''>
                        <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'>Nom de l'utilisateur </th>
                        <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'>Role de l'utilisateur </th>   
                        <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'> </th>   
                        <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'> </th>   
                    </tr>    
                </thead>
                <tbody className='text-[#203374]'>  
                    <tr>
                        <td> Ex: Menous  </td>
                        <td> Ex: Pharmacie  </td>
                        <td>
                            <label htmlFor="my_modal_7" className="btn bg-[#203374] text-white text-base text-center font-black lg:text-base items-center">Détail</label>
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">

                                <div className="modal-box p-2">
                                    <h1> Nom   </h1>
                                    <h1> Prénom </h1>
                                    <div className="modal-action justify-center">
                                        <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td><button className='btn bg-red-700 text-white border-none'> Activer </button></td>
                    </tr>   
                </tbody>
            </table>
        </div>            
    </div>
  )
}

export default ListeAttente