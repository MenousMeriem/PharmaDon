import React from 'react'

function SingleCardSignalement({element}) {
    const raisonOne = "raison1"
    const filter = element.signalement.filter(el => el === raisonOne)
    const raisonOneCount = filter.length

    const raisonTwo = "raison2"
    const filter1 = element.signalement.filter(el => el === raisonTwo)
    const raisonTwoCount = filter1.length

    const raisonThree = "raison3"
    const filter2 = element.signalement.filter(el => el === raisonThree)
    const raisonThreeCount = filter2.length

    
  return (
    <div className='px-6 py-4 border border-gray-200 shadow-xl bg-[#203374] rounded-lg flex flex-col gap-6 text-gray-50 font-semibold text-xl '>
      <div className='flex flex-col gap-2'> 
        <span className='text-sm text-gray-200'>Nom du médicament</span>
        {element.idMedicament[0].nomMedicament}
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-sm text-gray-200'>Nombre de signalements</span>
        {element.signalement.length} 
      </div>
      <label htmlFor="my_modal_7" className="btn bg-[#203374] text-white text-base text-center font-black lg:text-base items-center">Détail</label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box leading-10">
            {/* <h1> Raison : {element.nom} </h1> */}
            <div className="modal-action justify-center">
              <label htmlFor="my_modal_7" className="btn bg-red-800 border-none">Fermer</label>
            </div>
          </div>
        </div>
    </div>   
  )
}

export default SingleCardSignalement