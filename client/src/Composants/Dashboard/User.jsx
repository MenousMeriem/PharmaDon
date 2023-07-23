import React from 'react'
import axios from 'axios' 
import { toast } from 'react-toastify';

function User({element , setActiver ,activer, config} ) {

    const onUpdate  = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/Utilisateur/ActiverCompte`, {id: element._id}, config)
            toast.success('utilisateur Activer!! ')
            setActiver(pre => !pre )
        } catch (error) {
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        }
    }
  return (

    <tr>
        <td> {element.nom}  </td>
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
                    {element.role === 'Pharmacie' ? (
                        <React.Fragment>
                            <h1> Nom de la pharmacie : {element.nomPharmacie} </h1>
                            <h1> Numéro de la pharmacie : {element.numPharmacie} </h1>
                            <h1> Adresse de la pharmacie : {element.wilayaPharmacie}, {element.adressePharmacie} </h1>
                        </React.Fragment>
                    ) : element.role === 'Association' ? (
                        <React.Fragment> 
                            <h1> Nom de l'association : {element.nomAsso} </h1>
                            <h1> Numéro de l'association : {element.numAsso} </h1>
                            <h1> Adresse de l'association : {element.wilayaAsso}, {element.adresseAsso} </h1>

                        </React.Fragment> 
                    ): ( <td></td> )}
                    <a href={"http://localhost:5000/images"+element.fichierIDPharmacie}> fichier</a> 
                    <div className="modal-action justify-center">
                        <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
                    </div>
                </div>
            </div>
        </td>
        <td>
            {activer ? <button className= 'btn bg-red-700 text-white border-none'
            onClick={onUpdate}> Confirmer </button> : <button className="btn bg-red-700 text-white border-none"
            onClick={()=> setActiver(pre => !pre)}> Activer </button>}
        </td>
    </tr>   

  )
}

export default User