import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Mail() {

    const navigate = useNavigate()
    const utilisateur = localStorage.getItem('Utilisateur') || null 
    useEffect(() => {
        if (utilisateur) navigate('/Accueil');
    }, []);

    const [mail, setMail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const reponse = await axios.post('http://localhost:5000/Seconnecter/reinitialiserMdp', {mail})
            console.log(reponse.data)
                toast.success('Votre mail a bien été envoyé')
        } catch (error) {
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        } finally {
            setLoading(false)
        }
    }
    
  return (

    <div>
        <div className="hero min-h-screen bg-[#9fdff490]">
            <h1 className="lg:text-4xl text-3xl font-black text-center absolute top-16  text-[#203374]">Réinitialisation de mot de passe</h1>
            <div className="hero-content flex-col lg:flex-row-reverse text-[#203374] py-32 lg:p-10">
                <div className="lg:text-left lg:w-1/2 p-5 leading-8">
                    <p className="lg:text-lg text-justify mb-2">Bienvenue sur la page de réinitialisation de mot de passe. Si vous avez oublié 
                    votre mot de passe, veuillez suivre les étapes ci-dessous pour restaurer l'accès à votre compte : </p>
                    <ul className='list-decimal list-inside text-justify'>
                        <li>Entrez votre adresse e-mail associée à votre compte dans le champ [Champ pour l'adresse e-mail].</li>
                        <li> Cliquez sur le bouton "Réinitialiser le mot de passe" pour soumettre votre demande.</li>
                        <li>Assurez-vous de vérifier votre boîte de réception ainsi que votre dossier de courriers indésirables/spams au cas où 
                            l'e-mail aurait été filtré. </li>
                    </ul>   
                </div>
                <div className="card justify-center shadow-2xl bg-base-100 lg:w-1/2 lg:h-80">
                    {/* <div className="card-body"> */}
                        <form onSubmit={handleSubmit}>
                            <div className="card-body gap-8">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-[#203374] text-lg font-black">Votre adresse e-mail : </span>
                                    </label>
                                    <input type="email" required value={mail} onChange={e=> setMail(e.target.value)} placeholder="[Champ pour l'adresse e-mail]" className="input input-bordered text-[#203374] " />
                                </div>
                                <div className="form-control">
                                    <button type='submit' disabled={loading} className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail