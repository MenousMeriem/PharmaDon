import React from 'react'
import image from '../../assets/Accueil/d.jpg'


function Don() {
  return (
    <div>
        <div className="card w-full h-96  ">
            <figure><img src={image} /></figure>
        </div>
        <div className="hero lg:min-h-fit lg:py-20 md:py-10 py-5 bg-white text-[#203374]">
            <div className="hero-content">
                <div className='text-center'>
                    <h1 className="text-3xl font-black text-center md:text-justify lg:text-justify">
                        Bienvenue sur notre application de don de médicaments en ligne !
                    </h1>
                    <p className="lg:py-6 md:py-4 py-4 lg:text-lg text-center md:text-justify lg:text-justify">
                        <h1 className='font-bold underline'>1. Don par le biais d'associations :</h1> 
                        <ul className='list-disc list-inside leading-10 mb-3'>
                            <li>
                                Nous avons établi des partenariats avec des associations spécialisées dans la collecte et la distribution 
                                de médicaments. Ces associations sont expertes dans le traitement des dons et s'assurent que les médicaments 
                                parviennent aux personnes dans le besoin.
                            </li>
                            <li>
                                Lorsque vous souhaitez faire un don, notre application facilite la mise en relation avec ces associations. 
                                Vous pouvez trouver des informations sur les associations partenaires, y compris leurs coordonnées et 
                                les types de médicaments qu'elles acceptent. En communiquant avec elles, vous pourrez organiser la collecte 
                                et la remise de vos dons de manière efficace et conforme aux réglementations en vigueur.
                            </li>

                        </ul>
                        
                        <h1 className='font-bold underline leading-10'>2. Don par le biais de pharmacies :</h1>
                        <ul className='list-disc list-inside leading-10'>
                            <li>
                                Nous avons également établi des partenariats avec des pharmacies locales qui acceptent les dons de médicaments 
                                non utilisés, non périmés et en bon état. Ces pharmacies sont tenues de respecter les réglementations et 
                                les exigences légales relatives aux dons de médicaments.
                            </li>
                            <li>
                                En utilisant notre application, vous pouvez facilement trouver des pharmacies partenaires près de chez vous. 
                                Vous obtiendrez des informations détaillées sur ces pharmacies, y compris leurs coordonnées et les modalités de don. 
                                Vous pourrez ainsi les contacter pour organiser la remise de vos médicaments dans le respect des procédures 
                                de sécurité établies.
                            </li>
                            <li>
                                Grâce à notre collaboration étroite avec des associations et des pharmacies, vous pouvez donner vos médicaments 
                                en toute confiance, en sachant qu'ils seront acheminés vers ceux qui en ont le plus besoin. Ensemble, 
                                nous contribuons à réduire le gaspillage de médicaments tout en améliorant l'accès aux traitements vitaux.
                            </li>
                            <li>
                                Nous vous remercions de votre soutien et de votre engagement envers notre initiative de don de médicaments. 
                                Votre générosité fait une réelle différence dans la vie de nombreuses personnes. Si vous avez des questions ou 
                                des préoccupations, n'hésitez pas à nous contacter.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Don