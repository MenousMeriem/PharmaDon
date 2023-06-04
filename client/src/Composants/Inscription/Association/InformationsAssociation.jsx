import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios"

function InformationsAssociation() {
    
  const [form, setForm] = useState({
    nom:"", 
    prenom:"", 
    sexe:"Homme", 
    date_de_naissance:"",
    adresse:"",
    mail:"",
    numtel:"",
    role:"Association",
    nomAsso:"",
    mot_de_passe:""
})

    const [fichierOne, setFichierOne] = useState('')
    const [fichierTwo, setFichierTwo] = useState('')
    const utilisateur = localStorage.getItem('Utilisateur') || null 
    useEffect(() => {
        if (utilisateur) navigate('/Accueil');
    }, []);

const navigate = useNavigate()

const handleOnChange =(e) => {
    setForm((previousState) => ({
        ...previousState,
        [e.target.name]: e.target.value,
    }));
}

const handleSubmit = async (e) => {
    e.preventDefault();
        const formData = new FormData()
        formData.append("image", fichierOne[0])
        formData.append("image", fichierTwo[0])
        const {fichiero, fichiert, ...data} = form
        Object.entries(data).forEach(([key, value]) => {formData.append(key, value)})
    try {
        const reponse = await axios.post('http://localhost:5000/Utilisateur/AjouterUtilisateur', formData)
        if(reponse.data)  {
            localStorage.setItem('Utilisateur', JSON.stringify(reponse.data));
            setForm({
                nom:"", 
                prenom:"", 
                sexe:"Homme", 
                date_de_naissance:"",
                adresse:"",
                mail:"",
                numtel:"",
                nomAsso:"",
                role:"Association",
                mot_de_passe:""
            })
            toast.success('Compte créer avec succès ')
        }
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || error.message);
    }
}

  return (
    <div>

        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-fit sm:mx-auto '>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom du président de l'association </span>
                        </label>
                        <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder="Nom du président de l'association" className="input input-bordered border-[#203374] w-full max-w-xs mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prenom du président de l'association </span>
                        </label>
                        <input type="text" name='prenom' value={form.prenom} onChange={handleOnChange} required placeholder="Prénom du président de l'association" className="input input-bordered border-[#203374] w-full max-w-xs mt-2" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Date de naissance*</span>
                        </label>
                        <input type="date" name='date_de_naissance' value={form.date_de_naissance} onChange={handleOnChange} required placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div onChange={handleOnChange}>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Sexe*</span>
                        </label>
                        <input className='mr-2 ml-2' type="radio" name='sexe'value="Homme" id="homme" checked={form.sexe === "Homme"} onChange={handleOnChange} />
                        <label className='mr-24' htmlFor="Homme">Homme</label>
                        <input className='mr-2' type="radio" name="sexe" value="Femme" id="femme" checked={form.sexe === "Femme"} onChange={handleOnChange} />
                        <label htmlFor="Femme">Femme</label>
                    </div>
                </div> 

                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom de l'association*</span>
                        </label>
                        <input type="text" name='nomAsso' value={form.nomAsso} onChange={handleOnChange} required placeholder="Nom de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse de l'association*</span>
                        </label>
                        <input type="text" name='adresse' value={form.adresse} onChange={handleOnChange} required placeholder="Adresse exacte de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div> 

                <div>
                    <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Adresse mail de l'association*</span>
                            </label>
                            <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Adresse mail de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Numéro de tél de l'association*</span>
                            </label>
                            <input type="text" name='numtel' value={form.numtel} onChange={handleOnChange} required placeholder="Numéro de téléphone de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                        </div>
                    </div>
                </div>      

                <div>
                    <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Copie du statut de l'association*</span>
                            </label>
                            <input type="file" name='fichiero' onChange={e => setFichierOne(e.target.files)} required className="input input-bordered border-[#203374] w-full max-w-xs" />
                        </div> 
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Copie de votre carte d'identité recto-verso*</span>
                            </label>
                            <input type="file" name='fichiert' onChange={e => setFichierTwo(e.target.files)} required className="input input-bordered border-[#203374] w-full max-w-xs" />
                        </div>    
                    </div>
                </div> 
                <div className=''>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Mot de passe*</span>
                    </label>
                    <input type="password" value={form.mot_de_passe} onChange={handleOnChange} name='mot_de_passe' required placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            
                <div className='sm:grid sm:grid-cols-2 '>
                    <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                    <div className='sm:grid sm:justify-items-end grid justify-center sm:mt-10 mt-5'>
                        <button type='submit' className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40">Enregistrer </button>
                    </div>
                </div> 
            </form>   
        </div>

    </div>
    
  )
}

export default InformationsAssociation