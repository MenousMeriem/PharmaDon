import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function InformationsPersonnelles() {

    const [sexe, setSexe] = useState("Homme")
    const onOptionChange = e => {
      setSexe(e.target.value)
    }

  return (
    <div>
            <div className='text-[#203374] bg-white border-[#0DC4C7] w-fit'>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 '>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Nom</span>
                        </label>
                        <input type="text" placeholder="Votre nom" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Prénom</span>
                        </label>
                        <input type="text" placeholder="Votre prénom" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Date de naissance</span>
                        </label>
                        <input type="date" placeholder="Votre date de naissance" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Sexe</span>
                        </label>
                        <input className='mr-2 ml-2' type="radio" name='sexe'value="Homme" id="homme" checked={sexe === "Homme"} onChange={onOptionChange} />
                        <label className='mr-24' htmlFor="Homme">Homme</label>
                        <input className='mr-2' type="radio" name="sexe" value="Femme" id="femme" checked={sexe === "Femme"} onChange={onOptionChange} />
                        <label htmlFor="medium">Femme</label>
                    </div>
                </div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div className=''>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de téléphone</span>
                        </label>
                        <input type="tel" placeholder="Votre numéro de téléphone" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>  
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse mail</span>
                        </label>
                        <input type="email" placeholder="Votre adresse mail" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>      
                <div>
                    <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                        <div>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Adresse</span>
                            </label>
                            <input type="text" placeholder="Votre wilaya" className="input input-bordered border-[#203374] w-full max-w-xs" />
                            <input type="text" placeholder="Votre adresse exacte" className="input input-bordered border-[#203374] w-full max-w-xs mt-1" />
                        </div>
                        <div className=''>
                            <label className="label">
                                <span className="label-text text-[#203374]"> Mot de passe</span>
                            </label>
                            <input type="password" placeholder="Votre mot de passe " className="input input-bordered border-[#203374] w-full max-w-xs" />
                            <input type="password" placeholder="Mot de passe confirmé" className="input input-bordered border-[#203374] w-full max-w-xs mt-1" />
                        </div>
                    </div>
                </div> 
            </div>

        <div className='text-[#203374] bg-white w-fit'>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse de la pharmacie</span>
                    </label>
                    <input type="text" placeholder="Wilaya" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    <input type="text" placeholder="Adresse exacte de la pharmacie" className="input input-bordered border-[#203374] w-full max-w-xs mt-2" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse mail de la pharmacie</span>
                    </label>
                    <input type="email" placeholder="Adresse mail" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            </div>      

            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div className='sm:grid sm:grid-rows-3'>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de téléphone de la pharmacie</span>
                        </label>
                        <input type="tel" placeholder="Votre numéro " className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>  
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie du registre de commerce</span>
                        </label>
                        <input type="file" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                </div>
            </div> 
            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie de votre carte d'identité recto-verso</span>
                        </label>
                        <input type="file" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>   
                </div>
            </div> 
            <div className='sm:grid'>
                <div className=' sm:grid sm:justify-center grid justify-center sm:mt-10 mt-5'>
                    <Link>
                        <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none sm:text-lg sm:w-40"> Modifier </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InformationsPersonnelles