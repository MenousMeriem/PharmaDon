import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/Annimations/5699-loading-26-paper-plane.json'

function Contact() {
  return (
    <div>
        <div className="hero min-h-fit bg-[#219dbc42] my-10">
            <div className="hero-content flex-col lg:flex-row-reverse px-10 py-10 text-[#203374]">
                <div className="lg:text-left lg:ml-10">
                    {/* <Lottie className='w-40 h-10' animationData={animation}/> */}
                    <h1 className="lg:text-5xl text-3xl font-black text-center ">Nous contacter</h1>
                    <p className="py-6 text-xl text-center lg:leading-10">Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. 
                    Notre équipe se fera un plaisir de vous aider à trouver la pharmacie la plus adaptée à vos besoins.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Votre email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nom d'utilisateur </span>
                            </label>
                            <input type="text" placeholder="Nom d'utilisateur" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Votre message </span>
                            </label>
                            <textarea type="text" placeholder="Message ..." className="textarea textarea-bordered textarea-lg " />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Envoyer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact