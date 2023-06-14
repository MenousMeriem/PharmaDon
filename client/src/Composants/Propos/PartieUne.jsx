import React from 'react'
import Lottie from "lottie-react"
import animation from '../../assets/Annimations/112605-medicine-online.json'

function PartieUne() {
  return (
    <div>
        <div className="hero lg:min-h-fit lg:py-20 md:py-10 py-5 bg-white text-[#203374]">
            <div className="hero-content md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:gap-20">
                <div className='text-center'>
                    <h1 className="lg:text-5xl text-3xl font-black text-center md:text-justify lg:text-justify">Votre partenaire santé de confiance</h1>
                    <p className="lg:py-6 md:py-4 py-4 lg:text-xl text-center md:text-justify lg:text-justify">Pharmadon est un réseau de pharmacies dédié à votre bien-être. 
                    Nous regroupons plusieurs pharmacies de confiance, toutes engagées à vous offrir des produits pharmaceutiques de qualité 
                    et des services de santé de premier ordre. Avec notre réseau étendu, nous sommes présents dans plusieurs localités.
                    </p>
                    <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white md:float-left lg:float-left">Toutes les pharmacies</button>
                </div>
                <div>
                    <Lottie className='w-[50] hidden md:block' animationData={animation}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartieUne