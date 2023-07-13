import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function ListeAttente() {

    // Récupération du token : 
    const [loading, setLoading] = useState(true)
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    } 


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
                    {data.map((element, index) => ( 
                        <tr key={index}>

                        <td>  {element.nom}  </td>
                        <td> {element.role} </td>
                        <td>
                            <label htmlFor="my_modal_7" className="btn bg-[#203374] text-white text-base text-center font-black lg:text-base items-center">Détail</label>
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box leading-10">
                                    <h1> Nom : {element.nom}  </h1>
                                    <h1> Prénom : {element.prenom}</h1>
                                    <h1> Sexe : {element.sexe} </h1>
                                    <h1> Date de naissance {element.date_de_naissance.toString().slice(0,10)} </h1>
                                    <h1> Wilaya : {element.wilaya} </h1>
                                    <h1> Adresse : {element.adresse} </h1>
                                    <h1> Téléphone : {element.numtel} </h1>
                                    <h1> Mail : {element.mail} </h1>
                                    <h1> Nom de la pharmacie : {element.nomPharmacie} </h1>
                                    <h1> Numéro de la pharmacie : {element.numPharmacie} </h1>
                                    <h1> Adresse de la pharmacie : {element.wilayaPharmacie}, {element.adressePharmacie} </h1>
                                    <h1> </h1>
                                    <div className="modal-action justify-center">
                                        <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td><button className='btn bg-red-700 text-white border-none'> Activer </button></td>
                    </tr>   
                    ))}
                </tbody>
            </table>
        </div>            
    </div>
  )
}

export default ListeAttente