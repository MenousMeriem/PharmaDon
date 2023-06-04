import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/PlusieursPharmacies/imageHero.jpg'

function Hero_Pharma() {
  return (
    <div>
        <div className="hero min-h-fit">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image} className=" hidden lg:block lg:max-w-xl" />
            <div className='text-[#203374] text-center lg:text-left'>
              <h1 className="text-3xl lg:text-5xl font-bold py-3 lg:py-6">Bienvenue dans la page des phamarices disponibles </h1>
              <p className="text-lg lg:text-2xl py-3 lg:py-6">Voulez-vous ajouter votre pharmacie et etre parmi nous ?</p>
              <Link to={'/InscriptionPharmacien'} >
                <button className="btn bg-[#203374] text-white">Ajouter ma pharmacie</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero_Pharma