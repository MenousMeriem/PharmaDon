import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AjoutAnnonce() {
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    }
     
    const navigate = useNavigate()

    const [input, setInput] = useState ({
        nomMedicament: "",
        adresse: "",
        numTel: "", 
        detail: "",
    })

    const onChange = (e) => {
        setInput((previousState) => ({
            ...previousState, 
            [e.target.name]: e.target.value
        }))
    }

    // Ajouter une annonce : 

    const [image, setImage] = useState('')

    const ajouterAnnonce = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("image", image[0])
        Object.entries(input).forEach(([key, value]) => {formData.append(key, value)})
        try {
            const reponse = await axios.post('http://localhost:5000/Annonce/AjouterAnnonce', formData, config)
            if(reponse.data)  {
                setInput({
                    nomMedicament: "",
                    adresse: "",
                    numTel: "", 
                    detail: "",})
            toast.success('Annonce ajouté avec succes !! ')
            navigate('/PageMesAnnonces')
        }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
    <div className='pb-10'>        
        <section className='bg-[#0dc4c734] rounded-2xl mx-auto border-4 lg:w-3/5 w-5/6 border-[#0DC4C7] py-4 lg:px-5 shadow-gray-600 shadow-lg'>   
            <form onSubmit={ajouterAnnonce} className="card-body rounded-lg text-[#203374]">
                <h3>Nom du médicament : </h3>
                <input type="text" className="input input-bordered border-[#203374]" placeholder='Nom du médicament ' name='nomMedicament' value={input.nomMedicament} onChange={onChange} required /> 
                <h3>Numéro de téléphone : </h3>
                <input type="tel" className="input input-bordered border-[#203374]" placeholder='Numéro de téléphone ' name='numTel' value={input.numTel} onChange={onChange} required/> 
                <h3> Adresse : </h3>
                <input type="text" className="input input-bordered border-[#203374]" placeholder='Adresse 'name='adresse' value={input.adresse} onChange={onChange} required/> 
                <h3> Catégorie :</h3>
                <select  className="select select-bordered border-2 border-[#0DC4C7] "name='categorie' value={input.categorie} required onChange={onChange}>
                    <option disabled hidden> Catéogrie </option>
                    <option> Demande </option>
                    <option> Don </option>
                </select> 
                <h3> Détail de l'annonce : </h3>
                <textarea placeholder='Détail de lannonce' className="textarea textarea-bordered textarea-lg w-full max-w-full border-[#203374]" 
                type="text" name='detail' value={input.detail} onChange={onChange} required></textarea>
                <div className='w-full flex justify-center'>
                    <label htmlFor='ci' className="label">
                        <span className="label-text text-white btn bg-[#0DC4C7] border-none hover:bg-white hover:text-[#0DC4C7] hover:border-none w-full max-w-lg mt-4"> Ajouter photo(s)</span>
                    </label>
                    <input type="file" id='ci' name='image' onChange={e => setImage(e.target.files)} required className="input hidden input-bordered border-[#203374] w-full max-w-lg mt-2" />
                </div>   
                <div className='flex justify-center'>
                    <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none "
                    type='submit'>
                        Ajouter une annonce 
                    </button>  
                </div>      
            </form>
        </section>
    </div>
  )
}

export default AjoutAnnonce