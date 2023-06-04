import React from 'react'
import image from '../../../assets/heroAss.png'

function HeroInscAssociation() {
  return (
    <div>
      <div className="hero h-96 bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='sm:block hidden'>
            <img src={image} className="max-w-sm"/>
          </div>       
          <div className='text-center text-[#203374]'>
            <h1 className="sm:text-5xl text-2xl font-bold">Vous-etes une Association ? Créer votre compte gratuitement </h1>
            <p className="py-6 sm:text-2xl">Bienvenue sur votre plateforme, merci de vous reconnecter pour accéder à vos données.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroInscAssociation