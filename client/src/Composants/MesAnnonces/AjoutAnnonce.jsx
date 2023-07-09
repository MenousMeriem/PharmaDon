import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AjoutAnnonce({refetch, setRefetch}) {
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
        categorie:"",
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
        // const {image, ...data} = form
        Object.entries(input).forEach(([key, value]) => {formData.append(key, value)})
        try {
            const reponse = await axios.post('http://localhost:5000/Annonce/AjouterAnnonce', formData, config)
            if(reponse.data)  {
                setInput({
                    nomMedicament: "",
                    adresse: "",
                    numTel: "", 
                    categorie:"",
                    detail: "",})
            toast.success('Annonce ajouté avec succes !! ')
            setRefetch(!refetch)
        }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
    <div className='h-full  w-full'>        
        <section className='bg-white  mx-auto  w-full  lg:px-5 '>   
            <form onSubmit={ajouterAnnonce} className="card-body rounded-lg text-[#203374]">

                <h3>Nom du médicament : </h3>
                <input type="text" className="input input-bordered border-[#203374]" placeholder='Nom du médicament ' name='nomMedicament' value={input.nomMedicament} onChange={onChange} required /> 
                
                <h3>Numéro de téléphone : </h3>
                <input type="tel" className="input input-bordered border-[#203374]" placeholder='Numéro de téléphone ' name='numTel' value={input.numTel} onChange={onChange} required/> 
                
                <h3> Adresse : </h3>
                <input type="text" className="input input-bordered border-[#203374]" placeholder='Adresse 'name='adresse' value={input.adresse} onChange={onChange} required/> 
                
                <h3> Catégorie :</h3>
                <select  className="select select-bordered border-2 border-[#203374]"  name='categorie' value={input.categorie} required onChange={onChange}>
                    <option disabled hidden value={""}> Categorie </option>
                    <option> Demande </option>
                    <option> Don </option>
                </select> 
                
                <h3> Détail de l'annonce : </h3>
                <textarea placeholder="Détail de l'annonce" className="textarea textarea-bordered textarea-lg w-full max-w-full border-[#203374]" 
                type="text" name='detail' value={input.detail} onChange={onChange} required></textarea>
                                
                <div className='flex  items-start  justify-between gap-4'>
                    <button className="btn flex-1 bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none"
                    type='submit'>
                        Ajouter une annonce 
                    </button>  
                    <div className='flex justify-center'>
                    <label htmlFor='ci' >
                        <span className="label-text  text-white btn bg-[#0DC4C7] border-none hover:bg-white hover:text-[#0DC4C7] hover:border-none w-full max-w-lg "> Ajouter photo(s)</span>
                    </label>
                    <input type="file" id='ci' name='image' onChange={e => setImage(e.target.files)} className="input hidden input-bordered border-[#203374] w-full max-w-lg mt-2" />
                </div>   
                </div>      
            </form>
        </section>
    </div>
  )
}

export default AjoutAnnonce