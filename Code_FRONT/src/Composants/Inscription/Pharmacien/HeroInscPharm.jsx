import React from 'react'
import image from '../../../assets/hero.png'

function HeroInscrPharm() {
  return (
    <div>
      <div className="hero h-96 bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='hidden'>
            <img src={image} className="max-w-sm" />
          </div>
          <div className='text-center text-[#203374]'>
            <h1 className="sm:text-5xl text-2xl font-bold">Avez-vous une pharmacie ? Créer votre compte gratuitement </h1>
            <p className="py-6 sm:text-2xl">Bienvenue sur votre plateforme, merci de vous reconnecter pour accéder à vos données.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroInscrPharm