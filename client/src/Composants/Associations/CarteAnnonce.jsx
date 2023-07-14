import image from '../../assets/Pharmacies/medicament.jpg'

function CarteAnnonce({element}) {
  return (
    <div>
      <div className='p-10 '>
        <div className="card card-compact bg-base-100 shadow-xl w-80 lg:w-96 lg:h-full text-[#203374]">
          <figure><img className='w-60' src={image}/></figure>
          <div className="card-body m-5">
            <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
              {element.categorie ==='Demande' ? (
                <span className="indicator-item badge badge-primary w-full h-10 bg-[#203374] rounded-md">Demande</span> 
              ):( 
                <span className="indicator-item badge badge-primary w-full h-10 bg-[#219EBC] border-[#219EBC] rounded-md">Don</span> 
              )}
            <label htmlFor="my_modal_7" className="btn bg-[#203374] text-white text-base text-center font-black lg:text-base items-center">Signaler l'annonce</label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box leading-10">
                <input type="checkbox" checked="checked" className="checkbox" />  
                <h1> 1-  </h1>
                <h1> 2- </h1>
                <h1> 3-  </h1>           
                <div className="modal-action justify-center">
                    <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarteAnnonce