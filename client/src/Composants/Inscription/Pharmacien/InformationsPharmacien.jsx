import React, { useEffect, useState } from 'react'
import wilaya from '../../../assets/Data/Wilaya_Of_Algeria.json'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios"

function InformationsPharmacien() {
    const [form, setForm] = useState({
    nom:"", 
    prenom:"", 
    sexe:"Homme", 
    date_de_naissance:"",
    adresse:"",
    wilaya:"",
    mail:"", 
    numtel:"", 
    nomPharmacie:"",
    numPharmacie:"",
    wilayaPharmacie:"",
    adressePharmacie: "",
    role:"Pharmacie",
    mot_de_passe:"",
    confirmer_mot_de_passe:""
})
    const [fichierOne, setfichierOne] = useState('')
    const [fichierTwo, setfichierTwo] = useState('')

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
                setForm({
                    nom:"", 
                    prenom:"", 
                    sexe:"Homme", 
                    date_de_naissance:"",
                    adresse:"",
                    wilaya:"",
                    mail:"",
                    numtel:"", 
                    nomPharmacie:"",
                    numPharmacie:"",
                    wilayaPharmacie:"",
                    adressePharmacie: "",
                    role:"Pharmacie",
                    mot_de_passe:"",
                    confirmer_mot_de_passe: ""
                })
                toast.success('Compte créer avec succès ') 
                navigate('/Connexion')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message);
        }
    }
  return ( 
    <div className='lg:py-5 sm:p-5 flex justify-center'>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-screen p-5 px-10 sm:mx-auto'>
            <form onSubmit={handleSubmit} encType='multipart/form-data' >
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom du pharmacien(ne)*</span>
                        </label>
                        <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder=" Votre Nom" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prénom du pharmacien(ne)*</span>
                        </label>
                        <input type="text" name='prenom' value={form.prenom} onChange={handleOnChange} required placeholder="Votre prénom" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2 mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Date de naissance du pharmacien(ne)*</span>
                        </label>
                        <input type="date" name='date_de_naissance' value={form.date_de_naissance} onChange={handleOnChange} required placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div onChange={handleOnChange}>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Sexe du pharmacien(ne)*</span>
                        </label>
                        <input className='mr-2 ml-2' type="radio" name='sexe' value={"Homme"} id="Homme" checked={form.sexe === "Homme"} onChange={handleOnChange}/>
                        <label className='mr-24' htmlFor="Homme">Homme</label>
                        <input className='mr-2' type="radio" name="sexe" value={"Femme"} id="Femme" checked={form.sexe === "Femme"} onChange={handleOnChange}/>
                        <label htmlFor="Femme">Femme</label>
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Wilaya du pharmacien(ne)*</span>
                        </label>
                        <select  name='wilaya' value={form.wilaya} required onChange={handleOnChange} className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2 ">
                            <option disabled hidden> Votre wilaya </option>
                            {wilaya.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                        </select> 
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Adresse du pharmacien(ne)*</span>
                        </label>
                        <input type="text" name='adresse' value={form.adresse} onChange={handleOnChange} required placeholder="Votre adresse" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>      
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Adresse mail du pharmacien(ne)*</span>
                        </label>
                        <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Votre adresse mail" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Numéro de téléphone du pharmacien(ne)*</span>
                        </label>
                        <input type="tel" name='numtel' value={form.numtel} onChange={handleOnChange} required placeholder="Votre numéro de téléphone" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div> 
                </div> 
                
                <div className=' w-2/3 mx-auto h-[2px]  bg-[#0DC4C7] my-8'></div>
                
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Nom de la pharmacie*</span>
                        </label>
                        <input type="text" name='nomPharmacie' value={form.nomPharmacie} onChange={handleOnChange} required placeholder="Nom de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Numéro de téléphone de la pharmacie*</span>
                        </label>
                        <input type="tel" name='numPharmacie' value={form.numPharmacie} onChange={handleOnChange} required placeholder="Numéro de téléphone de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>                  
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Wilaya de la pharmacie*</span>
                        </label>
                        <select  name='wilayaPharmacie' value={form.wilayaPharmacie} required onChange={handleOnChange} className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2 ">
                            <option disabled hidden> Votre wilaya </option>
                            {wilaya.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                        </select> 
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Adresse de la pharmacie</span>
                        </label>
                        <input type="text" name='adressePharmacie' value={form.adressePharmacie} onChange={handleOnChange} required placeholder="Adresse complète de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Mot de passe*</span>
                        </label>
                        <input type="password" name='mot_de_passe' value={form.mot_de_passe} onChange={handleOnChange} required placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374] mt-5"> Confirmer le mot de passe*</span>
                        </label>
                        <input type="password" name='confirmer_mot_de_passe' value={form.confirmer_mot_de_passe} onChange={handleOnChange} required placeholder="Confirmer votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>
                </div>

                <div className='sm:grid sm:grid-cols-2 gap-2 '>
                    <div className='w-full'>
                        <label htmlFor='ci' className="label">
                            <span className="label-text text-white btn bg-[#0DC4C7] border-white w-full max-w-lg mt-10"> Copie de carte d'identité recto-verso*</span>
                        </label>
                        <input type="file" id='ci' name='fichiero' onChange={e => setfichierOne(e.target.files)} required className="input hidden input-bordered border-[#203374] w-full max-w-lg mt-2" />
                    </div>   
                    <div className='w-full'>
                        <label className="label" htmlFor='rc'>
                            <span className="label-text text-white  btn bg-[#0DC4C7] border-white  w-full max-w-lg mt-10"> Copie du registre de commerce*</span>
                        </label>
                        <input type="file" name='fichiert' id='rc' onChange={e => setfichierTwo(e.target.files)} required className="hidden" />
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

export default InformationsPharmacien