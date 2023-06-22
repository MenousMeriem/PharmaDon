import React, { useEffect, useState } from 'react'
import image from '../../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'

function Connexion() {

    const utilisateur = localStorage.getItem('utilisateur')
    const navigate = useNavigate('/Accueil')
    useEffect(() => {
        if(utilisateur) navigate('/Accueil')
    }, [])

    const [form, setForm] = useState({
        mail:"",
        mot_de_passe:""
    })
   
    const onChange = async (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reponse = await axios.post('http://localhost:5000/Seconnecter/seConnecter', form)
            if(reponse.data) {
                localStorage.setItem('Utilisateur', JSON.stringify(reponse.data))
                navigate('/Accueil')
            }
        } catch (error) {
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        }
    }
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full max-w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={image}  />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className='text-5xl mb-10 text-[#203374] font-bold text-center'>Bienvenue sur PharmaDon </h1>
                <form onSubmit={handleSubmit} className='max-w-[550px] w-full mx-auto rounded-lg p-5 px-5'>
                    <div className='flex flex-col text-[#203374] py-2 mt-5 mb-5'>
                        <label className='text-lg'>Adresse mail</label>
                        <input type='email' name='mail' value={form.mail} onChange={onChange} required className='py-2 px-4 placeholder-gray-400 mt-2 text-lg  border-b-2 border-[#203374]' placeholder='Entrer votre adresse mail' />
                    </div>
                    <div className='flex flex-col text-[#203374] py-2'>
                        <label className='text-lg'>Mot de passe </label>
                        <input type='text' name='mot_de_passe' value={form.mot_de_passe} onChange={onChange} required className='py-2 px-4 placeholder-gray-400 mt-2 text-lg  border-b-2 border-[#203374] ' placeholder='Entrer votre mot de passe' />
                    </div> 
                    <div className=' flex justify-center flex-col items-center'>
                        <button type='submit' className="btn mt-10 w-52 text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7] mb-10">Se connecter</button>
                        <label className='text-[#203374] '> Vous n'avez pas de compte ?</label><Link to={'/Inscription'} className='text-[#203374] font-black underline underline-offset-2 '> S'inscrire </Link>
                        <Link to={'/ReinitialierMotdePasse'} className='text-[#203374] font-black underline underline-offset-2 '> Mot de passe oublié  </Link>
                        <Link to={'/Accueil'} className='text-[#203374] font-black underline underline-offset-2 '> Accueil </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Connexion