import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import wilayas from '../../../assets/Data/Wilaya_Of_Algeria.json'
import wilayasAsso from '../../../assets/Data/Wilaya_Of_Algeria.json'
import { toast } from 'react-toastify'
import axios from "axios"

function InformationsAssociation() {
    
    // Si l'utilsateur est déja connecté 
    const navigate = useNavigate()
    const utilisateur = localStorage.getItem('Utilisateur') || null 
    useEffect(() => {
        if (utilisateur) navigate('/Accueil');
    }, []);

    const [form, setForm] = useState({
    nom:"", 
    prenom:"", 
    sexe:"Homme", 
    date_de_naissance:"",
    wilaya: "",
    adresse:"",
    mail:"",
    numtel:"",
    nomAsso:"",
    numAsso:"",
    wilayaAsso:"",
    adresseAsso:"",
    role:"Association",
    mot_de_passe:"",
    confirmer_mot_de_passe:""
    })

    const [fichierOne, setFichierOne] = useState('')
    const [fichierTwo, setFichierTwo] = useState('')

    // la fonction d'inscription : 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(form.mot_de_passe !== form.confirmer_mot_de_passe) {
            return toast.warn('Vérifier votre mot de passe!')
        }
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
                    wilaya:"",
                    adresse:"",
                    mail:"",
                    numtel:"",
                    nomAsso:"",
                    numAsso:"",
                    wilayaAsso:"",
                    adresseAsso:"",
                    role:"Association",
                    mot_de_passe:"",
                    confirmer_mot_de_passe:""
                })
                toast.success('Compte créer avec succès ')
                navigate('/PageProfilAssociation')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message);
        }
    }
    
    const handleOnChange =(e) => {
        setForm((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    }
    
    return (
        <div className='lg:py-5 sm:p-5 flex justify-center'>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-screen p-5 px-10 sm:mx-auto'>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] sm:text-sm"> Nom du président de l'association* </span>
                        </label>
                        <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder="Nom du président de l'association" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div className=''>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prenom du président de l'association* </span>
                        </label>
                        <input type="text" name='prenom' value={form.prenom} onChange={handleOnChange} required placeholder="Prénom du président de l'association" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Date de naissance*</span>
                        </label>
                        <input type="date" name='date_de_naissance' value={form.date_de_naissance} onChange={handleOnChange} required placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-lg" />
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
                            <span className="label-text text-[#203374]"> Wilaya*</span>
                        </label>
                        <select name='wilaya' value={form.wilaya} required onChange={handleOnChange} className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2 ">
                            <option disabled hidden value=""> Wilaya</option>
                            {wilayas.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                        </select> 
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse*</span>
                        </label>
                        <input type="text" name='adresse' value={form.adresse} onChange={handleOnChange} required placeholder="Adresse exacte de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                </div> 
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5 '>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse mail*</span>
                        </label>
                        <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Adresse mail de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de tél*</span>
                        </label>
                        <input type="text" name='numtel' value={form.numtel} onChange={handleOnChange} required placeholder="Numéro de téléphone de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                </div> 

                <div className=' w-2/3 mx-auto h-[2px]  bg-[#0DC4C7] my-8'></div>
                
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom de l'association*</span>
                        </label>
                        <input type="text" name='nomAsso' value={form.nomAsso} onChange={handleOnChange} required placeholder="Nom de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de tél de l'association*</span>
                        </label>
                        <input type="number" name='numAsso' value={form.numAsso} onChange={handleOnChange} required placeholder="Numéro de téléphone de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                </div> 
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Wilaya de l'association*</span>
                        </label>
                        <select name='wilayaAsso' value={form.wilayaAsso} required onChange={handleOnChange} className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2 ">
                            <option disabled hidden value=""> Wilaya de l'association </option>
                            {wilayasAsso.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                        </select> 
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse de l'association*</span>
                        </label>
                        <input type="text" name='adresseAsso' value={form.adresseAsso} onChange={handleOnChange} required placeholder="Adresse exacte de l'association" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                </div>                 
                <div>
                    <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Mot de passe*</span>
                            </label>
                            <input type="password" name='mot_de_passe' onChange={handleOnChange} placeholder='Mot de passe...' required className="input input-bordered border-[#203374] w-full max-w-lg" />
                        </div>  
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Confirmer votre mot de passe*</span>
                            </label>
                            <input type="password" name='confirmer_mot_de_passe' onChange={handleOnChange} placeholder='Confirmer mot de passe...' required className="input input-bordered border-[#203374] w-full max-w-lg" />
                        </div>    
                    </div> 
                </div> 
                <div>
                    <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
                    <div className='w-full'>
                        <label htmlFor='ci' className="label">
                            <span className="label-text text-white btn bg-[#0DC4C7] border-white w-full max-w-lg mt-4"> Copie de carte d'identité recto-verso*</span>
                        </label>
                        <input type="file" id='ci' name='fichiero' onChange={e => setFichierOne(e.target.files)} required className="input hidden input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>   
                    <div className='w-full'>
                        <label className="label" htmlFor='rc'>
                            <span className="label-text text-white  btn bg-[#0DC4C7] border-white  w-full max-w-lg mt-4"> Copie du registre de commerce*</span>
                        </label>
                        <input type="file" name='fichiert' id='rc' onChange={e => setFichierTwo(e.target.files)} required className="hidden" />
                    </div>   
                    </div> 
                </div> 
                <div className='sm:grid sm:grid-cols-2 '>
                    <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                    <div className='sm:grid sm:justify-items-end grid justify-end sm:mt-10 mt-5 lg:flex lg:justify-end md:flex md:justify-end '>
                        <button type='submit' className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-[#0DC4C7] sm:text-lg sm:w-40">Enregistrer </button>
                    </div>
                </div> 
            </form>   
        </div>

    </div>
    
  )
}

export default InformationsAssociation