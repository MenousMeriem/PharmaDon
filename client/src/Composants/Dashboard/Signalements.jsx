import React, { useState } from 'react'

function Signalements() {

  // Recupération du token : 
  const currentUser = localStorage.getItem('Utilisateur')
  const currentUserObject = JSON.parse(currentUser)
  const config = {
    Headers: {
      Authorization : `Barrer ${currentUserObject.accessToken}`
    }
  }

  // Affichage des signalements : 
  const [data, setData] = useState([])
  const [signalements, setSignalements] = useState('')
  const [nbreSig, setNbreSig] = useState('')

  const afficherSignalements = async() => {
    const reponse = await axios.get('', config)
    if(reponse.data){
      setData(reponse.data)

    }
  }


  return (
    <div className='w-full'>
        <h1 className='p-10 text-white font-bold text-lg bg-[#203374]'>Liste des signalements </h1>
        <div className="overflow-x-auto py-5 rounded-none">
                <table className="table table-xs w-full">
                    <thead>
                        <tr className=''>
                            <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'>Nom de l'utilisateur </th>
                            <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'>Role de l'utilisateur </th>   
                            <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'>Nombre de signalements</th>   
                            <th className='text-[#203374] bg-slate-100 border-t-4 border-b-4 text-sm'> </th>   
                        </tr>    
                    </thead>
                    {/* <tbody className='text-[#203374]'>  
                        {data.map((element, index) => ( 
                            <tr key={index}>
                            <td>  {element.nom} {element.prenom}  </td>
                            <td> {element.role} </td>
                            <td> {element.nbre} </td>
                        </tr>   
                    ))}
                    </tbody> */}
                </table>
            </div>            
    </div>
  )
}

export default Signalements