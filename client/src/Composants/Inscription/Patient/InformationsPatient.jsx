import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import wilaya from "../../../assets/Data/Wilaya_Of_Algeria.json"
import { toast } from 'react-toastify'
import axios from "axios"

function InformationsPatient() {

    const [form, setForm] = useState({ 
        nom:"", 
        prenom:"", 
        sexe:"Homme", 
        date_de_naissance:"",
        wilaya: "",
        adresse:"",
        mail:"", 
        numtel:"",
        role:"Patient",
        mot_de_passe:"",
        confirmer_mot_de_passe:""
    })
    
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
        if(form.mot_de_passe !== form.confirmer_mot_de_passe) {
            return toast.warn('Confirmez votre mot de paase')
        }
        try {
            const reponse = await axios.post('http://localhost:5000/Utilisateur/AjouterUtilisateur', form)
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
                role:"Patient",
                mot_de_passe:"",
                confirmer_mot_de_passe:""
            })
            toast.success('Compte créer avec succès ')
            navigate('/PageProfilPatient')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
    <div className='lg:py-5 sm:p-5 flex justify-center'>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-screen p-5 px-10 sm:mx-auto '>
            <form onSubmit={handleSubmit} >   
                <div className='sm:grid sm:grid-cols-2 gap-2  '>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] sm:text-sm"> Nom*</span>
                        </label>
                        <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder="Votre nom" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prénom*</span>
                        </label>
                        <input type="text" name='prenom' value={form.prenom} onChange={handleOnChange} required placeholder="Votre prénom" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Date de naissance*</span>
                        </label>
                        <input type="date" name='date_de_naissance' value={form.date_de_naissance} onChange={handleOnChange} required placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                    <div onChange={handleOnChange}>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Sexe*</span>
                        </label>
                        <input className='mr-2 ml-2' type="radio" name='sexe' value={"Homme"} id="Homme" checked={form.sexe === "Homme"} onChange={handleOnChange}/>
                        <label className='mr-24' htmlFor="Homme">Homme</label>
                        <input className='mr-2' type="radio" name="sexe" value={"Femme"} id="Femme" checked={form.sexe === "Femme"} onChange={handleOnChange}/>
                        <label htmlFor="Femme">Femme</label>
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div className='sm:grid sm:grid-rows-2'>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Numéro de téléphone*</span>
                        </label>
                        <input type="tel" name='numtel' value={form.numtel} onChange={handleOnChange} required placeholder="Votre numéro de téléphone" className="input input-bordered border-[#203374] w-full max-w-lg"/>
                    </div>  
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Adresse mail*</span>
                        </label>
                        <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Votre adresse mail" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                </div>   

                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Adresse*</span>
                        </label>
                        <input type="text" name='adresse' value={form.adresse} onChange={handleOnChange} required placeholder="Votre adresse exacte" className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                    <div className=''>                        
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Wilaya*</span>
                        </label>
                        <select name='wilaya' value={form.wilaya} required onChange={handleOnChange} className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2 ">
                            <option disabled hidden> Wilaya</option>
                            {wilaya.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                        </select> 
                    </div> 
                </div>

                <div className='sm:grid sm:grid-cols-2 '>
                    <div className=''>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Mot de passe*</span>
                        </label>
                        <input type="password" name='mot_de_passe' value={form.mot_de_passe} onChange={handleOnChange} required placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-lg" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Confirmer votre mot de passe*</span>
                        </label>
                        <input type="password" name='confirmer_mot_de_passe' onChange={handleOnChange} placeholder='Confirmer mot de passe...' required className="input input-bordered border-[#203374] w-full max-w-lg" />
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

export default InformationsPatient