import React from 'react'
import image from '../../assets/INSC_CONNEX/heropat.png'

function Recuperation() {
  return (

    <div>
      <div className="w-96 h-60 flex justify-center">
          <div><img src={image} /></div>
      </div>
      <div className="hero lg:min-h-fit lg:py-20 md:py-10 py-5 bg-white text-[#203374]">
          <div className="hero-content">
              <div className='text-center'>
                  <h1 className="text-3xl font-black text-center md:text-justify lg:text-justify">
                      Bienvenue sur notre application de don de médicaments en ligne !
                  </h1>
                  <p className="lg:py-6 md:py-4 py-4 lg:text-lg text-center md:text-justify lg:text-justify">
                    <ul className='list-disc list-inside leading-10 mb-3'>
                        <li>
                            Dans notre application de don de médicaments en ligne, nous facilitons non seulement le processus de don, 
                            mais également la récupération de médicaments à partir des associations et des pharmacies partenaires. 
                            Nous croyons fermement en la valorisation des médicaments non utilisés et en leur redistribution responsable 
                            à ceux qui en ont besoin.
                        </li>
                        <li>
                            Grâce à nos associations partenaires, nous avons accès à une source fiable de médicaments donnés par 
                            des particuliers et des professionnels de la santé. Ces médicaments sont soigneusement vérifiés pour garantir 
                            leur qualité, leur sécurité et leur conformité aux réglementations en vigueur. Les associations jouent un 
                            rôle essentiel en collectant, triant et redistribuant ces médicaments de manière efficace.
                        </li>
                        <li>
                            De même, nos partenariats avec les pharmacies locales nous permettent de recueillir des médicaments 
                            non utilisés qui ont été retournés ou qui ne sont plus nécessaires. Les pharmacies, en tant qu'acteurs 
                            clés de la chaîne d'approvisionnement des médicaments, respectent strictement les réglementations et 
                            les protocoles de gestion des médicaments pour garantir leur intégrité et leur sécurité.
                        </li>
                        <li>
                            En utilisant notre application, vous pouvez explorer les offres de médicaments disponibles auprès de 
                            nos associations et pharmacies partenaires. Vous pourrez rechercher des médicaments spécifiques, consulter 
                            les détails tels que la posologie, la date de péremption et les informations du donneur, et engager 
                            une communication pour récupérer les médicaments qui vous sont nécessaires.
                        </li>
                        <li>
                            En collaborant avec nos associations et pharmacies partenaires, nous nous engageons à faciliter la récupération
                            de médicaments de manière responsable, en respectant les meilleures pratiques et les exigences légales. 
                            Ensemble, nous contribuons à réduire le gaspillage de médicaments tout en améliorant l'accès aux traitements 
                            pour ceux qui en ont besoin.
                        </li>
                        <li>
                            Nous vous remercions de votre soutien et de votre participation à notre initiative de don et de récupération 
                            de médicaments. Votre implication fait une réelle différence dans la vie des personnes qui dépendent de ces 
                            médicaments pour leur bien-être. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous 
                            contacter.
                        </li>
                    </ul>
                  </p>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Recuperation