import React from 'react'
import image from '../../assets/login.jpg'
import { Link } from 'react-router-dom'

function Connexion() {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={image}  />
        </div>
        <div className="flex flex-col justify-center">
        <h1 className='text-5xl mb-10 text-[#203374] font-bold text-center'>Bienvenue sur PharmaDon </h1>
            <form className='max-w-[550px] w-full mx-auto rounded-lg p-5 px-5'>
                <div className='flex flex-col text-[#203374] py-2 mt-5 mb-5'>
                    <label className='text-lg'>Adresse mail</label>
                    <input className='text-lg mt-2 p-2 divide-x-8 divide-red-950' placeholder='Entrer votre adresse mail' type="text" />
                </div>
                <div className='flex flex-col text-[#203374] py-2'>
                    <label className='text-lg'>Password</label>
                    <input className='p-2 mt-2 text-lg ' placeholder='Entrer votre mot de passe' type="password" />
                </div> 
                <Link to={'/'} className="btn mt-10 flex justify-center w-52 ml-32 text-white bg-[#0DC4C7] border-none hover:bg-indigo-50 hover:text-[#0DC4C7] mb-10">Se connecter</Link>
                <label className='text-[#203374] ml-20'> Vous n'avez pas de compte ?</label><Link to={'/'} className='text-red-700'> S'inscrire </Link>
            </form>
        </div>
    </div>
  )
}

export default Connexion