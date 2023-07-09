import {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import axios from "axios"
import wilayas from '../../../../assets/Data/Wilaya_Of_Algeria.json'
import Lottie from 'lottie-react'
import animation from '../../../../assets/Annimations/5699-loading-26-paper-plane.json'

function Informations() { 

     //Loading state
    const [loading, setLoading] = useState(true)

    const currentUser = localStorage.getItem('Utilisateur')
    const currentUserObject = JSON.parse(currentUser)
    const config = {
        headers: {
            Authorization: `Bearer ${currentUserObject.accessToken}`
        }
    }
    
    const [data, setData] = useState()
    const [nomValue, setnomValue] = useState("")
    const [prenomValue, setprenomValue] = useState('')
    const [sexeValue, setsexeValue] = useState("")
    const [naissanceValue, setnaissanceValue] = useState("")
    const [wilayaValue, setwilayaValue] = useState('')
    const [adresseValue, setadresseValue] = useState("")
    const [numtelValue, setnumtelValue] = useState("")
    const [mailValue, setmailValue] = useState("")
    const [nomPharmacieValue, setnomPharmacieValue] = useState('')
    const [numPharmacieValue, setnumPharmacieValue] = useState('')
    const [wilayaPharmacieValue, setwilayaPharmacieValue] = useState('')
    const [adressePharmacieValue, setadressePharmacieValue] = useState('')
    const [passwordValue, setpasswordValue] = useState('')
 
    //Pour afficher l'utilisateur actuel
    const fetchData = async () => {
      try {
        const reponse = await axios.get('http://localhost:5000/Utilisateur/afficherUtilisateur', config)
        if(reponse.data) {
            setData(reponse.data)
            setnomValue(reponse.data.nom)
            setprenomValue(reponse.data.prenom)
            setsexeValue(reponse.data.sexe)
            setnaissanceValue(reponse.data.date_de_naissance)
            setwilayaValue(reponse.data.wilaya)
            setadresseValue(reponse.data.adresse)
            setnumtelValue(reponse.data.numtel)
            setmailValue(reponse.data.mail)
            setnomPharmacieValue(reponse.data.nomPharmacie)
            setnumPharmacieValue(reponse.data.numPharmacie)
            setwilayaPharmacieValue(reponse.data.wilayaPharmacie)
            setadressePharmacieValue(reponse.data.adressePharmacie)
        }
      } catch (error) {
        toast.error(error.response?.data?.message||error.message)
      } finally {
        setLoading(false)
      }
    }

    useEffect( () => {
        fetchData()
      }, [])

    // Modification des informations 
    const [modifier, setModifier] = useState(false)
    const {role} = JSON.parse(localStorage.getItem('Utilisateur'))
    const obj = {   
        nom: nomValue,
        prenom: prenomValue,
        date_de_naissance: naissanceValue, 
        sexe: sexeValue,
        wilaya: wilayaValue,
        adresse: adresseValue,
        numtel: numtelValue, 
        mail: mailValue, 
        nomPharmacie: nomPharmacieValue,
        numPharmacie: numPharmacieValue,
        wilayaPharmacie: wilayaPharmacieValue,
        adressePharmacie: adressePharmacieValue, 
        mot_de_passe: passwordValue,
        role: role
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if(passwordValue === "") delete obj.mot_de_passe
        try {
            await axios.put('http://localhost:5000/Utilisateur/ModifierUtilisateur', obj, config)
            toast.success('Informations modifiés')
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    if(loading) return <Lottie className='w-40 h-10' animationData={animation}/>

  return (
    <div className='text-[#203374] bg-white border-[#0DC4C7] pb-16'>
        <section className='bg-white rounded-2xl mx-auto border-4 lg:w-4/5 w-5/6 border-[#203374]  py-4 lg:px-5  shadow-gray-600 shadow-lg '>   
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-black text-[#203374]"> Nom : </span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered border-[#203374] w-36 md:w-fit lg:w-fit" 
                    value={nomValue} onChange={e => setnomValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light ">{data.nom}</h6>} 
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
                            {wilayas.map(w => {
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
            <div className='w-full flex justify-between border-b border-[#0DC4C7] p-5'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]">Nom de la pharmacie :</span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered  w-36 md:w-fit lg:w-fit border-[#203374]" 
                    value={nomPharmacieValue} onChange={e => setnomPharmacieValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.nomPharmacie}</h6>} 
                </div>
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '> 
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]">Téléphone de la pharmacie : </span>
                    </label> 
                    {modifier ? <input type="tel" className="input input-bordered  w-36 md:w-fit lg:w-fit border-[#203374] " 
                    value={numPharmacieValue} onChange={e => setnumPharmacieValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.numPharmacie}</h6>} 
                </div>
            </div> 
            <div className='w-full flex justify-between border-b border-[#0DC4C7] p-5'>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Wilaya de la pharmacie : </span>
                    </label>
                    {modifier ? <select className="select select-bordered border-2  w-36 md:w-fit lg:w-fit border-[#0DC4C7] "
                        value={wilayaPharmacieValue} onChange={e => setwilayaPharmacieValue(e.target.value)} >
                            <option disabled hidden> Wilaya</option>
                            {wilayas.map(w => {
                                return <option key={w.id} value={w.name}>{w.code} - {w.name}</option>
                            }) }
                    </select> : <h6 className="lg:tracking-widest lg:font-light">{data.wilayaPharmacie}</h6>}
                </div>
            </div>
            <div className='w-full flex border-b border-[#0DC4C7] p-5 '>
                <div className='flex items-center gap-2'>
                    <label className="label">
                        <span className="label-text lg:text-lg font-bold text-[#203374]"> Adresse de la pharmacie : </span>
                    </label>
                    {modifier ? <input type="text" className="input input-bordered w-36 md:w-fit lg:w-fit border-[#203374]" 
                    value={adressePharmacieValue} onChange={e => setadressePharmacieValue(e.target.value)} /> : <h6 className="lg:tracking-widest lg:font-light">{data.adressePharmacie}</h6>}
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
                onClick={()=> setModifier(true)}> Modifier </button>}
                <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:lg:text-lg sm:w-40" 
                onClick={() => setModifier(false)}>Annuler</button> 
            </div>
        </section>
    </div>
    
  )
}

export default Informations