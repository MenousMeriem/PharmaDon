import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import wilaya from '../../../../assets/Data/Wilaya_Of_Algeria.json'
import Lottie from 'lottie-react'
import animation from '../../../../assets/Annimations/5699-loading-26-paper-plane.json'


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
    const [roleValue, setRoleValue] = useState('')
    const [passwordValue, setpasswordValue] = useState()
    

    // Pour afficher l'utiliasteur actuel : 
    const fetchData = async() => {
        try {
            const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherUtilisateur/'+currentUser._id, config)
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
                mot_de_passe: passwordValue,
                role: roleValue
            }, config)
            window.location.reload()
            toast.success('Informations modifiés ')
        } catch (error) {
            toast.error(error.reponse?.data?.message || error.message)
        }
    } 
    
    if(loading) return <Lottie className='w-40 h-10' animationData={animation}/>
    
return (
    <div className='text-[#203374] bg-white border-[#0DC4C7] pb-16'>
        <section className='bg-[#0dc4c734] rounded-2xl mx-auto border-4 lg:w-3/5 w-5/6 border-[#0DC4C7] py-4 lg:px-5  shadow-gray-600 shadow-lg '>
            
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-black text-[#203374]"> Nom : </span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered border-[#203374] w-36 md:w-fit lg:w-fit" 
                    value={nomValue} onChange={e => setnomValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.nom}</h6>} 
                </div>
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-black  text-[#203374]"> Prénom : </span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered border-[#203374] w-36 md:w-fit lg:w-fit" 
                    value={prenomValue} onChange={e => setprenomValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.prenom}</h6>} 
                </div>
            </div>
            <div className='w-full flex justify-between border-b border-[#0DC4C7] p-5'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Date de naissance : </span>
                    </label>
                    {modifier ? <input type="date" className="input input-bordered border-[#203374] w-36 md:w-fit lg:w-fit" 
                    value={naissanceValue} onChange={e => setnaissanceValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.date_de_naissance.toString().slice(0,10)}</h6>} 
                </div>
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Sexe :</span>
                    </label>        
                    {modifier ? <>
                    <input className='mr-2 ml-2' type="radio" name='sexe' value={"Homme"} id="Homme" checked={sexeValue === "Homme"} 
                    onChange={e => setsexeValue(e.target.value)}/> 
                    <label className='lg:mr-24' htmlFor="Homme">Homme</label>
                    <input className='mr-2' type="radio" name="sexe" value={"Femme"} id="Femme" checked={sexeValue === "Femme"} onChange={e => setsexeValue(e.target.value)}/>
                    <label htmlFor="Femme">Femme</label>
                    </> :  <p> {data.sexe} </p>}
                </div>
            </div>
            <div className='w-full flex justify-between border-b border-[#0DC4C7] p-5 gap-12'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Wilaya : </span>
                    </label>
                    {modifier ? <select className="select select-bordered border-2 w-36 md:w-fit lg:w-fit border-[#0DC4C7] mt-2"
                        value={wilayaValue} onChange={e => setwilayaValue(e.target.value)} >
                            <option disabled hidden> Wilaya</option>
                            {wilaya.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                    </select> : <h6 className="lg:tracking-widest lg:font-light">{data.wilaya}</h6>}
                </div>
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Adresse : </span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered  w-36 md:w-fit lg:w-fit border-[#203374]" 
                    value={adresseValue} onChange={e => setadresseValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.adresse}</h6>}
                </div>
            </div> 
            <div className='w-full flex justify-between border-b border-[#0DC4C7] p-5 gap-10'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Téléphone : </span>
                    </label>
                    {modifier ? <input type="tel" className="input input-bordered border-[#203374] w-36 md:w-fit lg:w-fit" 
                    value={numtelValue} onChange={e => setnumtelValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.numtel}</h6>} 
                </div> 
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '> 
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Mail : </span>
                    </label>
                    {modifier ? <input type="email" className="input input-bordered  w-36 md:w-fit lg:w-fit border-[#203374]" 
                    value={mailValue} onChange={e => setmailValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.mail}</h6>}            
                </div>
            </div>   
            <div className='w-full flex justify-between 400 p-5 pb-8'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Mot de passe : </span>
                    </label>
                    {modifier ? <input type="password" className="input input-bordered  w-36 md:w-fit lg:w-fit border-[#203374]"  
                    value={passwordValue} onChange={e => setpasswordValue(e.target.value)} /> : <h6 className=""></h6>}
                </div>  
            </div>    
            <div className='grid grid-cols-2 justify-center justify-items-center'>
                {modifier ? <button className="btn bg-[#0DC4C7]  border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:lg:text-lg sm:w-40" 
                onClick={handleUpdate}> Confirmer </button> : <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:lg:text-lg sm:w-40"
                onClick={e=> setModifier(true)}> Modifier </button>}
                <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:lg:text-lg sm:w-40" 
                onClick={e => setModifier(false)}>Annuler</button> 
            </div>
        </section>
    </div>
  )
}

export default Informations