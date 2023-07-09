import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

function Contact() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        mail: "", 
        text: "",
        nom: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post('http://localhost:5000/Messagerie/envoyerReclamation',form)
            setForm({
                mail:"",
                text:"",
                nom:""
            })
            toast.success('Message de réclamation envoyé avec succes ')
        } catch (error) {
            toast.error(error.message)
        } finally {setLoading(false)}
    }
    const handleOnChange =(e) => {
        setForm((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    }

  return (
    <div className='mb-10'>
        <div className="hero min-h-fit bg-[#219dbc42] ">
            <div className="hero-content flex-col lg:flex-row-reverse text-[#203374] lg:p-10">
                <div className="lg:text-left lg:w-1/2">
                    <h1 className="lg:text-5xl text-3xl font-black text-center ">Nous contacter</h1>
                    <p className="py-6 lg:text-xl text-center lg:leading-10">Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. 
                    Notre équipe se fera un plaisir de vous aider à trouver la pharmacie la plus adaptée à vos besoins.</p>
                </div>
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='mail' value={form.mail} onChange={handleOnChange} required placeholder="Votre email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Nom d'utilisateur </span>
                                </label>
                                <input type="text" name='nom' value={form.nom} onChange={handleOnChange} required placeholder="Nom d'utilisateur" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Votre message </span>
                                </label>
                                <textarea type="text" name='text' value={form.text} onChange={handleOnChange} required placeholder="Message ..." className="textarea textarea-bordered textarea-lg " />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' disabled={loading} className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact