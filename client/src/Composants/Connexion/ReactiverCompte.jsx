import React, {useEffect} from 'react'
import { Link, useNavigate , useLocation} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'


function ReactiverCompte() {
    // const utilisateur = localStorage.getItem('utilisateur')
    const location = useLocation()
    const navigate = useNavigate()    
    const id = new URLSearchParams(location.search).get('id')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reponse = await axios.put('http://localhost:5000/Seconnecter/reactiver/'+id)
            console.log(reponse.data)
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
        <h1 className='text-center text-[#203374] text-lg lg:text-2xl mt-20 lg:font-bold'> Voulez-vous vraiment réacvticer votre compte ? </h1>
        <div className='p-10 lg:flex lg:justify-center lg:items-center '>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-control gap-10">
                            <label className="label">
                                <span className="label-text text-center text-[#203374] text-base lg:text-lg"> Nous sommes ravis de vous revoir ! Réactivez votre compte pour accéder à votre compte </span>
                            </label>
                            <div className='flex justify-items-center justify-center gap-5'>
                                <button type='submit' className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right w-32">Oui</button>
                            </div>
                            <Link to={'/Accueil'} className='text-[#203374] font-black underline underline-offset-2 text-center'> Revenir à la page d'accueil </Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default ReactiverCompte