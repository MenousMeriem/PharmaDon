import React from 'react'

function SingleCardSignalement({element}) {

  const raisonOne = "Je pense que cette annonce pourrait être une tentative de vente illégale de médicaments, ce qui est contraire aux politiques de la plateforme"
  const filter = element.signalement.filter(el => el === raisonOne)
  const raisonOneCount = filter.length

  const raisonTwo = "Cette annonce semble proposer des médicaments contrefaits ou de qualité douteuse, ce qui peut présenter des risques pour la santé des bénéficiaires."
  const filter1 = element.signalement.filter(el => el === raisonTwo)
  const raisonTwoCount = filter1.length

  const raisonThree = "Je crois que cette annonce viole les règles de votre plateforme en proposant des médicaments restreints ou interdits."
  const filter2 = element.signalement.filter(el => el === raisonThree)
  const raisonThreeCount = filter2.length
    
  return (
    <div className='px-6 py-4 border border-gray-200 shadow-xl bg-[#669bbc] rounded-lg flex flex-col gap-6 text-white font-semibold '>
      <div className='flex flex-col gap-2'> 
        <span className='text-xl text-white'>Nom du médicament</span>
        {element.idMedicament[0].nomMedicament}
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-xl text-white'>Nombre de signalements</span>
        {element.signalement.length} 
      </div>
      <label htmlFor={`my_modal_${element._id}`} className="btn bg-[#203374] text-white text-base text-center font-black lg:text-base items-center">Détail</label>
        <input type="checkbox" id={`my_modal_${element._id}`} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-gray-800 border-4">
            <div className="">
              <table className="">
                <thead className=''> 
                  <tr>
                    <th>Signalement</th>
                    <th>Nombre de fois</th>
                  </tr>
                </thead>
                  <tbody>
                    {raisonOneCount > 0 &&<tr><td className='p-5'>1- {raisonOne}</td><td className='px-10'>{raisonOneCount}</td></tr>}
                    {raisonTwoCount > 0 &&<tr><td className='p-5'>2- {raisonTwo}</td><td className='px-10'>{raisonTwoCount}</td></tr>}
                    {raisonThreeCount > 0 &&<tr><td className='p-5'>3- {raisonThree}</td><td className='px-10'>{raisonThreeCount}</td></tr>}
                  </tbody>
              </table>
            </div>
            <div className="modal-action justify-center">
              <label htmlFor={`my_modal_${element._id}`} className="btn bg-red-800 border-none">Fermer</label>
            </div>
          </div>
        </div>
    </div>   
  )
}

export default SingleCardSignalement