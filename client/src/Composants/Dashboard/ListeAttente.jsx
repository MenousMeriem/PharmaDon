import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import User from './User'
import Lottie from "lottie-react"
import animation from '../../assets/Annimations/animation_lkehv1hn.json'

function ListeAttente() {

    const [loading, setLoading] = useState(true)
    
    // Récupération du token : 
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    } 


    // Affichage des informations de l'utilisateur en attente : 
    const [data, setData] = useState([])
    const [nomValue, setnomValue] = useState('')
    const [prenomValue, setprenomValue] = useState('')
    const [sexeValue, setsexeValue] = useState('')
    const [naissanceValue, setnaissanceValue] = useState('')
    const [wilayaValue, setwilayaValue] = useState('')
    const [adresseValue, setadresseValue] = useState('')
    const [numtelValue, setnumtelValue] = useState()
    const [mailValue, setmailValue] = useState('')
    // Si c'était une association : 
    const [nomAssoValue, setnomAssoValue] = useState('')
    const [wilayaAssoValue, setwilayaAssoValue] = useState('')
    const [adresseAssoValue, setadresseAssoValue] = useState('')
    const [numAssoValue, setnumAssoValue] = useState('')
    // Si c'était une pharmacie : 
    const [nomPharmacieValue, setnomPharmacieValue] = useState('')
    const [numPharmacieValue, setnumPharmacieValue] = useState('')
    const [wilayaPharmacieValue, setwilayaPharmacieValue] = useState('')
    const [adressePharmacieValue, setadressePharmacieValue] = useState('')


    const fetchData = async () => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Utilisateur/afficherDetailUsers`, config)
            if  (reponse.data) {
                    setData(reponse.data)
                    setnomValue(reponse.data.nom)
                    setprenomValue(reponse.data.prenom)
                    setsexeValue(reponse.data.sexe)
                    setnaissanceValue(reponse.data.date_de_naissance)
                    setwilayaValue(reponse.data.wilaya)
                    setadresseValue(reponse.data.adresse)
                    setnumtelValue(reponse.data.numtel)
                    setmailValue(reponse.data.mail)
                    // Si c'était une association : 
                    setnomAssoValue(reponse.data.nomAsso)
                    setnumAssoValue(reponse.data.numAsso)
                    setwilayaAssoValue(reponse.data.wilayaAsso)
                    setadresseAssoValue(reponse.data.adresseAsso)
                    // Si c'était une pharmacie :
                    setnomPharmacieValue(reponse.data.nomPharmacie)
                    setnumPharmacieValue(reponse.data.numPharmacie)
                    setwilayaPharmacieValue(reponse.data.wilayaPharmacie)
                    setadressePharmacieValue(reponse.data.adressePharmacie)
                }
        } catch (error) {
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }

    // Pour activer le compte d'un utilisateur : 
    const [activer, setActiver] = useState(false)
    
    useEffect(() => {
        fetchData()
    }, [activer])
    

    if(loading) return ( <Lottie animationData={animation} /> )

  return (
        <div className='w-full'>
            <h1 className='p-10 text-[#203374] font-black text-3xl bg-[#e1ecf7] border-[#203374] border-b-4  rounded-b-2xl'> Liste d'attente  </h1>
            <div className="overflow-x-auto py-5 rounded-none">
                <table className="table table-xs w-full">
                    <thead>
                        <tr className=''>
                            <th className='text-[#203374] font-extrabold bg-[#c0d6df] text-sm'>Nom de l'utilisateur </th>
                            <th className='text-[#203374] font-extrabold bg-[#c0d6df] text-sm'>Role de l'utilisateur </th>   
                            <th className='text-[#203374] bg-[#c0d6df] text-sm'> </th>   
                            <th className='text-[#203374] bg-[#c0d6df] text-sm'> </th>   
                        </tr>    
                    </thead>
                    <tbody className='text-[#203374]'>  
                        {data.map((element, index) => ( 
                            <User element={element} setActiver={setActiver} activer={activer} key={element._id} config={config} />
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
  )
}

export default ListeAttente