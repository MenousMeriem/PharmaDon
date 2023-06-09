import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

function Informations() {
    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    }

    //Loading 
    const [loading, setLoading] = useState(true)
    
    const [data, setData] = useState()
    
    const [modifier, setModifier] = useState(false)
    
    const [nomValue, setnomValue] = useState("")
    const [prenomValue, setprenomValue] = useState('')
    const [sexeValue, setsexeValue] = useState("")
    const [naissanceValue, setnaissanceValue] = useState("")
    const [adresseValue, setadresseValue] = useState("")
    const [wilayaValue, setwilayaValue] = useState("")
    const [numtelValue, setnumtelValue] = useState("")
    const [mailValue, setmailValue] = useState("")
    const [passwordValue, setpasswordValue] = useState('')
    
    // Pour afficher l'utiliasteur actuel : 
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherUtilisateur', config)
            if(reponse.data) {
                setData(reponse.data)
                setnomValue(reponse.data.nom)
                setprenomValue(reponse.data.prenom)
                setsexeValue(reponse.data.sexe)
                setnaissanceValue(reponse.data.naissance)
                setwilayaValue(reponse.data.wilaya)
                setadresseValue(reponse.data.adresse)
                setnumtelValue(reponse.data.numtel)
                setmailValue(reponse.data.mail)
            }
        } catch (error) {
            toast.error(error.reponse?.data?.message||error.message)  
        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    // Pour modifier les informations de l'utilisateur : 
    const handleUpdate = async () => {
        try {
            await axios.put('http://localhost:5000/Utilisateur/ModifierUtilisateur/'+data._id,
            {
                nom: nomValue,
                prenom: prenomValue,
                date_de_naissance: naissanceValue, 
                sexe: sexeValue, 
                wilaya: wilayaValue, 
                adresse: adresseValue, 
                numtel: numtelValue, 
                mail: mailValue, 
                mot_de_passe: passwordValue
            }, config)
            window.location.reload()
            toast.success('Informations modifiés ')
        } catch (error) {
            toast.error(error.reponse?.data?.message || error.message)
        }
    }
    
    if(loading) return <h1> Loading ... </h1>
    
return (
    <div className='text-[#203374] bg-white border-[#0DC4C7] w-screen'>
        <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold bg-slate-300 text-[#203374]"> Nom </span>
                </label>
                {modifier ? <input type="text" className="input input-bordered border-[#203374] " 
                value={nomValue} onChange={e => setnomValue(e.target.value)} /> : <h6 className="bg-slate-300">{data.nom}</h6>} 
            </div>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Prénom</span>
                </label>
                {modifier ? <input type="text" className="input input-bordered border-[#203374] w-full max-w-xs" 
                value={prenomValue} onChange={e => setprenomValue(e.target.value)} /> : <h6 className="">{data.prenom}</h6>} 
            </div>
        </div>
        <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Date de naissance</span>
                </label>
                {modifier ? <input type="date" className="input input-bordered border-[#203374] w-full max-w-xs" 
                value={naissanceValue} onChange={e => setnaissanceValue(e.target.value)} /> : <h6 className="">{data.date_de_naissance}</h6>} 
            </div>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Sexe </span>
                </label>        
                {modifier ? <>
                <input className='mr-2 ml-2' type="radio" name='sexe' value={"Homme"} id="Homme" checked={sexeValue === "Homme"} 
                onChange={e => setsexeValue(e.target.value)}/> 
                <label className='mr-24' htmlFor="Homme">Homme</label>
                <input className='mr-2' type="radio" name="sexe" value={"Femme"} id="Femme" checked={sexeValue === "Femme"} onChange={e => setsexeValue(e.target.value)}/>
                <label htmlFor="Femme">Femme</label>
                </> :  <p> {data.sexe} </p>}
            </div>
        </div>
        <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
            <div>
                <label className="label">
                    <span className="label-text text-[#203374]"> Wilaya*</span>
                </label>
                {modifier ? <select className="select select-bordered border-2 border-[#0DC4C7] w-full max-w-lg mt-2"
                    value={wilayaValue} onChange={e => setwilayaValue(e.target.value)} >
                        <option disabled hidden> Wilaya</option>
                        {wilayas.map(w => {
                            return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                        }) }
                </select> : <h6 className="">{data.wilaya}</h6>}
            </div>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Adresse</span>
                </label>
                {modifier ? <input type="text" className="input input-bordered border-[#203374] w-full max-w-xs" 
                value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h6 className="">{data.adresse}</h6>}
            </div>
        </div> 

        <div className='sm:grid sm:grid-cols-2 gap-2 sm:mt-5'>
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Numéro de téléphone</span>
                </label>
                {modifier ? <input type="tel" className="input input-bordered border-[#203374] w-full max-w-xs" 
                value={numtelValue} onChange={e => setnumtelValue(e.target.value)} /> : <h6 className="">{data.numtel}</h6>} 
            </div>  
            <div>
                <label className="label">
                    <span className="label-text text-lg font-bold text-[#203374]"> Adresse mail</span>
                </label>
                {modifier ? <input type="email" className="input input-bordered border-[#203374] w-full max-w-xs" 
                value={mailValue} onChange={e => setmailValue(e.target.value)} /> : <h6 className="">{data.mail}</h6>}            
            </div>
        </div>  
        <div className='grid grid-cols-2'>
            <label className="label">
                <span className="label-text text-lg font-bold text-[#203374]"> Mot de passe</span>
            </label>
            {modifier ? <input type="password" className="input input-bordered border-[#203374] w-full max-w-xs"  
            value={passwordValue} onChange={e => setpasswordValue(e.target.value)} /> : <h6 className=""></h6>}
        </div>

        <div className='grid grid-cols-2 justify-center'>
            {modifier ? <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
            onClick={handleUpdate}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"
            onClick={e=> setModifier(true)}> Modifier </button>}
            <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40" 
            onClick={e => setModifier(false)}>Annuler</button> 
        </div>
    </div>
  )
}

export default Informations