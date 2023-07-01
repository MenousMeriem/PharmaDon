import React from 'react'
// import image from '../../assets/image1.jpg'

function AvisAutres() {
  return (
    <div className='py-10'>
      
      <h1 className='text-center text-lg md:mt-5 md:text-3xl lg:text-4xl text-[#203374] py-12 underline underline-offset-8 decoration-[#0DC4C7]'> CE QUE LES GENS PENSENT DE PHARMADON ! </h1>

      <div className="carousel ">
        <div className="carousel-item">
          <div className="hero w-screen h-96 bg-teal-300">
            <div className="hero-content flex-col lg:flex-row">
              {/* <img src={image} className="max-w-sm rounded-lg shadow-2xl" /> */}
              <div className='grid justify-items-center p-10'>
                <h1 className="text-5xl font-bold"> " AVIS DES AUTRES "</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
                In deleniti eaque aut repudiandae et a id nisi. In deleniti eaque aut repudiandae et a id nisi In deleniti eaque aut 
                repudiandae et a id nisi</p>
              </div>
            </div>
          </div>
          <div className="hero w-screen h-96 bg-red-800 p-10">
            <div className="hero-content flex-col lg:flex-row">
              {/* <img src={image} className="max-w-sm rounded-lg shadow-2xl" /> */}
              <div className='grid justify-items-center'>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              </div>
            </div>
          </div>
        </div> 
      </div>
      
      {/* <div className="card flex-shrink-0 shadow-2xl bg-base-100 lg:w-1/2">
        <div className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Nom d'utilisateur </span>
                </label>
                <input type="text" placeholder="Nom d'utilisateur" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Votre commentaire </span>
                </label>
                <textarea type="text" placeholder="Commentaire ..." className="textarea textarea-bordered textarea-lg " />
            </div>
            <div className="form-control mt-6">
                <button className="btn text-sm md:text-sm border-none bg-[#203374] hover:bg-[#219EBC] text-white float-right">Publier</button>
            </div>
        </div>
      </div> */}


    </div>
  )
}

export default AvisAutres