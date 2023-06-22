import React from 'react'
import Lottie from "lottie-react"
import animation from '../../assets/Annimations/56120-medical-shield.json'

function PartieDeux() {
  return (
    <div>
        <div className="hero lg:min-h-fit lg:py-20 md:py-10 py-5 bg-white text-[#203374]">
            <div className="hero-content md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:gap-20">
                <div>
                    <Lottie className='w-[50] hidden md:block' animationData={animation}/>
                </div>
                <div className='text-center'>
                    <h1 className="lg:text-5xl text-3xl font-black text-center md:text-justify lg:text-justify">Engagés envers le bien-être de tous</h1>
                    <p className="lg:py-6 md:py-4 py-4 lg:text-xl text-center md:text-justify lg:text-justify">Notre engagement envers la satisfaction des patients et le bien-être
                    de tous est au cœur de notre mission. En collaborant avec des associations, nous nous efforçons de fournir des 
                    soins de santé complets, notamment des médicaments et des services de soutien, pour répondre aux besoins spécifiques
                    de chaque individu. Nous croyons en l'importance de l'accessibilité, de la compassion et de l'engagement envers 
                    des soins de santé de qualité pour tous.
                    </p>
                    <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white md:float-right lg:float-right">Toutes les associations</button>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default PartieDeux