import React from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'


function ListUsers({element}) {

    // Récupération du token : 
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    }

    // l'admin supprime un utilisateur : 
    const onDelete  = async (e) => {
        e.preventDefault();
        try {
          if(user) {
            await axios.delete('http://localhost:5000/Utilisateur/SupprimerUtilisateur/'+id, config)
            toast.success('utilisateur supprimé!! ')
          }
        } catch (error) {
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        }
      }

  return (
    <tr>
        <th>1</th>
        <td>{element.nom}</td>
        <td>{element.prenom}</td>
        <td>{element.nomAsso}</td>
        <td>{element.nomPharmacie}</td>
        <td>{element.role}</td>
    {/* <td><button className="btn bg-green-500 text-white border-none">Activer</button></td> */}   
        <td><button className="btn bg-orange-400 text-white border-none">Désactiver</button></td>
        <td><button className='btn bg-red-700 text-white border-none' onClick={onDelete}> Supprimer </button></td>
    </tr>    
                
  )
}

export default ListUsers