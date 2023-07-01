import React from 'react'
import image from '../../../assets/INSC_CONNEX/heroAss.png'

function HeroInscAssociation() {
  return (
    <div>
      <div className="hero h-48 sm:h-full lg:h-96 md:h-full bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='sm:block hidden'>
            <img src={image} className="max-w-sm"/>
          </div>       
          <div className='text-center text-[#203374]'>
            <h1 className="sm:text-5xl text-2xl font-bold">Vous-etes une Association ? Créer votre compte gratuitement </h1>
            <p className="py-5 sm:text-2xl">Bienvenue sur votre plateforme, merci de vous reconnecter pour accéder à vos données.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroInscAssociation