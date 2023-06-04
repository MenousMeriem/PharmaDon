import React from 'react'
import image from '../../assets/Accueil/Group.png'
import Lottie from "lottie-react"
import animationData from "../../assets/Annimations/37450-pharmacist-will-call-medical-animation.json"

function Hero() {
  return (
    <div>
        <div className="hero h-full lg:px-10 lg:py-8 md:px-10 relative">
          <img src={image} className='hidden lg:block'></img>  
          <Lottie className='w-[40vw] hidden md:block absolute top-1/5 right-0' animationData={animationData}/>
          <div className='px-4 grid justify-items-center md:flex md:justify-end md:mt-96 bg-[#0dc4c71f] lg:bg-inherit py-5'>
            <h1 className='font-bold text-2xl sm:text-3xl md:hidden text-[#203374]'> PharmaDon </h1>
            <p className='text-[#203374] text-center py-3 text-sm md:hidden lg:hidden '>Ensemble, nous pouvons améliorer 
            la santé et le bien-être de notre communauté. </p>
            <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
          </div>
        </div>
    </div>
  )
}

export default Hero