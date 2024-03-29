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
        const confirmation = confirm('Etes vous sur de supprimer cet utilisateur ?')
        if(!confirmation) return
        try {
            await axios.delete(`http://localhost:5000/Utilisateur/SupprimerUtilisateur/`+element._id, config)
            toast.success('utilisateur supprimé!! ')
        } catch (error) {
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        }
    }

    return (
        <tr>
            <th></th>
            <td>{element.nom}</td>
            <td>{element.prenom}</td>
            <td>{element.role}</td>
            {element.role === 'Pharmacie' ? (
                <React.Fragment>
                    <td>{element.nomPharmacie}</td>
                </React.Fragment>
                ) : element.role === 'Association' ? (
                <React.Fragment>
                    <td>{element.nomAsso}</td>
                </React.Fragment> 
                ): ( <td></td> )} 
            <td><button className='btn bg-red-700 text-white border-none' onClick={onDelete}> Supprimer </button></td>
        </tr>       
    )
}

export default ListUsers