import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/Annimations/REGISTER.json'
import animation1 from '../../assets/Annimations/SEARCH.json'
import animation3 from '../../assets/Annimations/PILL.json'
import animation4 from '../../assets/Annimations/MESSAGE.json'
import animation5 from '../../assets/Annimations/ALERT.json'

function Processus() {
  return (
    <div>

        <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> PROCESSUS DE DON ! </h1>

        <div className="carousel rounded-box gap-4 p-5">
            <div className="carousel-item w-96 rounded-lg shadow-xl h-min">
                <div className="card bg-base-100">
                    <div className='grid justify-items-center'>
                        <Lottie className='w-72 h-64' animationData={animation} />
                    </div> 
                    <div className="card-body">
                        <p className='text-[#203374] font-bold text-center '>L’utilisateur peut créer une annonce sur notre plateforme. 
                            il fournissent des informations telles que le nom du médicament, l’adresse, numéro de téléphone et le détail.</p>
                        {/* <div className="card-actions justify-center">
                            <button className="btn text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white">Créer mon compte</button>
                        </div> */}
                    </div>
                </div>
            </div> 
            <div className="carousel-item w-96 rounded-lg shadow-xl h-min">
                <div className="card bg-base-100">
                    <div className='grid justify-items-center'>
                        <Lottie className='w-72 h-64' animationData={animation1} />
                    </div>
                    <div className="card-body">
                        <p className='text-[#203374] font-bold text-center'> Les utilisateurs en quête de médicaments peuvent utiliser la fonction de recherche sur notre application 
                            pour trouver des médicaments disponibles. </p>
                        {/* <div className="card-actions justify-center">
                            <button className="btn text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white">Créer mon compte</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item w-96 rounded-lg shadow-xl h-min">
                <div className="card bg-base-100">
                    <div className='grid justify-items-center'>
                        <Lottie className='w-72 h-64' animationData={animation3} />
                    </div>
                    <div className="card-body">
                        <p className='text-[#203374] font-bold text-center'> Les utilisateurs peuvent parcourir les annonces de don et de demande 
                        de médicaments correspondant à leurs critères de recherche, Chaque annonce affiche des informations détaillées.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item w-96 rounded-lg shadow-xl h-min">
                <div className="card bg-base-100">
                    <div className='grid justify-items-center'> 
                        <Lottie className='w-72 h-64' animationData={animation4} />
                    </div>
                    <div className="card-body">
                        <p className='text-[#203374] font-bold text-center'>L'utilisateur intéressé par un don particulier peut entrer 
                        en contact avec le donneur via les informations dur l'annonce. Ils peuvent discuter des détails supplémentaires. </p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item w-96 rounded-lg shadow-xl h-min">
                <div className="card bg-base-100">
                    <div className='grid justify-items-center'>
                        <Lottie className='w-72 h-64' animationData={animation5} />
                    </div>
                    <div className="card-body">
                        <p className='text-[#203374] font-bold text-center'>L’utilisateur peut signaler les annonces, cette fonction permet 
                        aux utilisateurs de signaler toute annonce suspecte, inappropriée ou en violation des règles de notre plateforme.</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Processus