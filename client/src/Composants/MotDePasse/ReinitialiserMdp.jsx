import React from 'react'

function ReinitialiserMdp() {

  return (
    <div>
        <h1 className='text-center text-[#203374] text-lg lg:text-2xl lg:mt-20'> Reinitialisation du mot de passe </h1>
        <div className='p-10 lg:flex lg:justify-center lg:items-center '>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mot de passe :</span>
                        </label>
                        <input type="password" placeholder="Votre mot de passe..." className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder="Confirmer votre mot de passe..." className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ReinitialiserMdp