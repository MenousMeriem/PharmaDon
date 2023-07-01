import React from 'react'

function Services() {
  return (
    <div>

    <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> POURQUOI CHOISIR PHARMADON ? </h1>

    <div className='grid justify-items-center gap-4 font-black'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3 ">
                        <button className="btn bg-[#f17300] border-none">1</button>
                    </div>
                    <p className='text-[#203374]'>
                        Permettez aux utilisateurs de créer un compte sur 
                        notre plateforme en envoyeant un mail de confirmation. 
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3">
                        <button className="btn bg-[#f17300] border-none">2</button>
                    </div>
                    <p className='text-[#203374]'>
                        Offrez aux utilisateurs la possibilité de créer et de gérer leurs profils.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3">
                        <button className="btn bg-[#f17300] border-none">3</button>
                    </div>
                    <p className='text-[#203374]'>
                    Mettez en place un système de recherche avancée permettant aux utilisateurs 
                    de trouver les médicaments dont ils ont besoin.
                    </p>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3">
                        <button className="btn bg-[#f17300] border-none">4</button>
                    </div>
                    <p className='text-[#203374]'>
                        Permettez aux utilisateurs de créer des annonces pour les médicaments qu'ils souhaitent donner. 
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3">
                        <button className="btn bg-[#f17300] border-none">5</button>
                    </div>
                    <p className='text-[#203374]'>
                        Fournissez aux utilisateurs la possibilité de consulter les annonces de dons disponibles.
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-[#a6e1fa] text-primary-content">
                <div className="card-body flex-row">
                    <div className="card-actions justify-start mr-3">
                        <button className="btn bg-[#f17300] border-none">6</button>
                    </div>
                    <p className='text-[#203374]'>
                        Fournissez un système de support pour aider les utilisateurs en cas de problèmes ou 
                        de questions liés à l'application.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services