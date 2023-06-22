import React from 'react'
import image from '../../assets/Accueil/medecine.avif'
import { Link } from 'react-router-dom'
// import Lottie from "lottie-react"
// import animationData from "../../assets/Annimations/22477-pharmacy-store-drug-home-building-maison-mocca-animation.json"

function DescriptionPharmacie() {
  return (
    <div>
        {/* <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> NOS SERVICES </h1> */}
        <div className="card lg:card-side bg-base-100 px-16">
            <img className='object-contain' src={image} />
            <div className="card-body">
                <h2 className='card-title text-center text-xl lg:text-start lg:text-4xl font-bold text-[#203374] py-5 underline underline-offset-8 decoration-[#0DC4C7]' > BIENVENUE  !! </h2>
                <p className='text-justify lg:text-lg lg:leading-8 text-[#203374]'> Profitez des fonctionnalités de notre site de pharmacies en ligne pour consulter les horaires d’ouverture, 
                    envoyer votre ordonnance, prendre rendez-vous avec votre pharmacien et être au courant de nos actualités 
                    et promotions. Une question ? Besoin d’un conseil ? Contactez-nous via la messagerie instantanée !
                    Notre équipe s'engage à :
                </p>
                <ul className='list-disc lg:text-lg text-[#203374]'>
                    <li>Vous apporter des conseils personnalisés en Contention médicale, Diététique, Diététique sportive, Conseil dermatologique, Oncologie, Chaussures médicales... </li> 
                    <li>Vous mettre les meilleurs services à disposition : Dépistage, Maintien à domicile, Carte avantage, Informations animations, Vente et location de matériel médical, Vaccination... </li>                    
                </ul>
                <Link to={'/AProposdeNous'}> 
                    <div className="card-actions justify-end">
                        <button className="btn text-sm md:text-lg border-none  bg-[#203374] hover:bg-[#219EBC] text-white">Afficher plus</button>
                    </div>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default DescriptionPharmacie