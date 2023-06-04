import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from "axios"

function InformationsPharmacien() {
        const [form, setForm] = useState({
        nom:"", 
        prenom:"", 
        sexe:"Homme", 
        date_de_naissance:"",
        adresse:"",
        mail:"",
        numtel:"",
        role:"Pharmacie",
        // fichierIDPharmacien:"",  //: req.file.paths
        mot_de_passe:""
    })
    const [imageOne, setImageOne] = useState('')
    const [imageTwo, setImageTwo] = useState('')

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
        formData.append("image", imageOne[0])
        formData.append("image", imageTwo[0])
        const {imageo, imaget, ...data} = form
        Object.entries(data).forEach(([key, value]) => {formData.append(key, value)})
        try {
            const reponse = await axios.post('http://localhost:5000/Utilisateur/AjouterUtilisateur', formData)
            console.log(reponse)
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
                    role:"Pharmacie",
                    // fichierIDPharmacien:"",  //: req.file.paths
                    mot_de_passe:""
                })
                toast.success('Compte créer avec succès ')
                navigate('/PageProfilPharmacien')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || error.message);
        }
    }

  return (
    <div>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-fit m-5 p-5  '>
            <form onSubmit={handleSubmit} encType='multipart/form-data' >
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom*</span>
                        </label>
                        <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder="Nom du pharmacien" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prénom*</span>
                        </label>
                        <input type="text" name='prenom' value={form.prenom} onChange={handleOnChange} required placeholder="Prénom du pharmacien" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Date de naissance*</span>
                        </label>
                        <input type="date" name='date_de_naissance' value={form.date_de_naissance} onChange={handleOnChange} required placeholder="Date de naissance du pharmacien" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div onChange={handleOnChange}>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Sexe*</span>
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
                            <span className="label-text text-[#203374]"> Numéro de téléphone*</span>
                        </label>
                        <input type="tel" name='numtel' value={form.numtel} onChange={handleOnChange} required placeholder="Votre numéro de téléphone" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>  
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse mail*</span>
                        </label>
                        <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Votre adresse mail" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>      
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse*</span>
                        </label>
                        <input type="text" name='adresse' value={form.adresse} onChange={handleOnChange} required placeholder="Adresse complète de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Mot de passe*</span>
                        </label>
                        <input type="password" name='mot_de_passe' value={form.mot_de_passe} onChange={handleOnChange} required placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie de votre carte d'identité recto-verso*</span>
                        </label>
                        <input type="file" name='imageo' onChange={e => setImageOne(e.target.files)} required className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie du registre de commerce*</span>
                        </label>
                        <input type="file" name='imaget'  onChange={e => setImageTwo(e.target.files)} required className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                </div>   
                <div className='sm:grid sm:grid-cols-2 '>
                    <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                    <div className=' sm:grid sm:justify-items-end grid justify-center sm:mt-10 mt-5'>
                            <button type='submit' className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40">Enregistrer </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default InformationsPharmacien