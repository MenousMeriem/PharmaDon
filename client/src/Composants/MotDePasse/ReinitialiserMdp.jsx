import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'

function ReinitialiserMdp() {
    const key = new URLSearchParams(window.location.search).get('key')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [mail, setMail] = useState('')
    const user = JSON.parse(localStorage.getItem('Utilisateur'))
 
    
    useEffect (() => {
        const verifierCle = async (key) => {
            try {
                const response = await axios.get('http://localhost:5000/Seconnecter/verifierCle?key='+key)
                if(!response.data.success || user.accessToken) {
                    navigate('/Connexion')
                }else {
                    setMail(response.data.mail)
                }
            } catch (error) {
                toast.error(error)
            }finally {
                setLoading(false)
            }
        }
        verifierCle(key)
    }, [])


        // Pour modifier le mot de passe : 
        const [form, setForm] = useState({
            mot_de_passe:"",
            confirmer_mot_de_passe:""
        })
        const onchange = (e) => setForm(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))

        const handleUpdate = async (e) => {
            e.preventDefault()
            try {
                if(form.mot_de_passe !== form.confirmer_mot_de_passe) {
                    return toast.warn('Vérifier votre mot de passe!')
                }
                await axios.put('http://localhost:5000/Seconnecter/modifierPassword',
                {
                    mdp: form.mot_de_passe,
                    mail
                })
                toast.success('Mot de passe modifié')
                navigate('/Connexion')
            } catch (error) {
                toast.error(error.reponse?.data?.message || error.message)
            }
        } 
        if(loading)return <h1 className='font-black text-6xl text-blue-700 text-center mt-32'>Loding...</h1>
  return (
    <div>
        <h1 className='text-center text-[#203374] text-lg lg:text-2xl lg:mt-20'> Reinitialisation du mot de passe </h1>
        <div className='p-10 lg:flex lg:justify-center lg:items-center '>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                <form onSubmit={handleUpdate}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mot de passe :</span>
                            </label>
                            <input type="password" name='mot_de_passe' onChange={onchange} value={form.mot_de_passe} required placeholder="Votre mot de passe..." className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="password" name='confirmer_mot_de_passe' onChange={onchange}  value={form.confirmer_mot_de_passe}  required placeholder="Confirmer votre mot de passe..." className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    </div>
  )
}

export default ReinitialiserMdp