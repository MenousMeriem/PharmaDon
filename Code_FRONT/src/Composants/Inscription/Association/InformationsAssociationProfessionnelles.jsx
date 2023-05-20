import React from 'react'

function InformationsAssociationProfessionnelles() {
  return (
    <div>
        <div className='text-[#203374] bg-white border-2 rounded-lg border-[#0DC4C7] w-fit sm:p-10 sm:mt-10 sm:ml-40 sm:mb-10 m-5 p-5 ml-16'>
            <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Nom de l'association*</span>
                    </label>
                    <input type="text" placeholder="Le nom de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-[#203374]"> Adresse mail de l'association*</span>
                    </label>
                    <input type="email" placeholder="Adresse mail de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                </div>
            </div> 
            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Adresse de l'association*</span>
                        </label>
                        <input type="text" placeholder="Wilaya" className="input input-bordered border-[#203374] w-full max-w-xs" />
                        <input type="text" placeholder="Adresse exacte de l'association" className="input input-bordered border-[#203374] w-full max-w-xs mt-2" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Numéro de tél de l'association*</span>
                        </label>
                        <input type="text" placeholder="Numéro de téléphone de l'association" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>
                </div>
            </div>      

            <div>
                <div className='sm:grid sm:grid-cols-2 gap-2 sm:ml-20 sm:mt-5'>
                    <div>
                        <label className="label">
                            <span className="label-text text-[#203374]"> Copie du statut de l'association*</span>
                        </label>
                        <input type="file" className="input input-bordered border-[#203374] w-full max-w-xs" />
                    </div>  
                </div>
            </div> 
            
            <div className='sm:grid sm:grid-cols-2'>
                <h3 className='sm:mt-12 mt-5'> Les champs * sont obligatoires </h3>
                <div className='sm:grid sm:justify-items-end sm:mt-10 mt-5 grid justify-center'>
                    <button className="btn bg-[#0DC4C7] border-[#0DC4C7] hover:bg-white hover:text-[#0DC4C7] hover:border-none text-lg w-40"> Enregistrer </button>
                </div>
            </div>     
            
        </div>
    </div>
    
  )
}

export default InformationsAssociationProfessionnelles