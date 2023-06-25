import React, { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'

function Mail() {

    const [mail, setMail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const reponse = await axios.post('http://localhost:5000/Seconnecter/reinitialiserMdp', {mail})
            console.log(reponse.data)
                toast.success('mail envoyé')
            
        } catch (error) {
            
            const errorMessage = error && error.request && error.request.responseText ? JSON.parse(error.request?.responseText).message : error.message
            toast.error(errorMessage)
        } finally {
            setLoading(false)
        }
    }
    
  return (
    <div>
        <h1 className='text-center text-[#203374] text-lg lg:text-2xl lg:mt-20'> Reinitialisation du mot de passe </h1>
        <h2 className='text-center text-[#203374] text-lg lg:text-xl'> le lien de récupération est envoyé ...........;; </h2>
        <div className='p-10 lg:flex lg:justify-center lg:items-center '>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Votre mail : </span>
                            </label>
                            <input type="email" required value={mail} onChange={e=> setMail(e.target.value)} placeholder="Votre mail..." className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' disabled={loading} className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Mail