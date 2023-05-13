import React from 'react'
import image from '../../assets/hero.png'

function Hero_Insc() {
  return (
    <div>
      <div className="hero h-96 bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm " />
          <div className='text-center text-[#203374]'>
            <h1 className="text-5xl font-bold">Avez-vous une pharmacie ? Créer votre compte gratuitement </h1>
            <p className="py-6">Bienvenue sur votre plateforme, merci de vous reconnecter pour accéder à vos données.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero_Insc