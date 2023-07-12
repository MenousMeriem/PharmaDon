import React from 'react'

function ListUsers({element}) {
  return (
    <div className='w-full'>
        <h1 className='p-10 text-white font-bold text-lg bg-cyan-700 '>Liste des utilisateurs </h1>
        
        <div className="overflow-x-auto py-5">
            <table className="table table-xs w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className='bg-[#0DC4C7] text-white'></th>
                        <th className='bg-[#0DC4C7] text-white text-sm'>Nom</th>
                        <th className='bg-[#0DC4C7] text-white text-sm'>Prenom</th>
                        <th className='bg-[#0DC4C7] text-white text-sm'>Role</th>
                        <th className='bg-[#0DC4C7] text-white text-sm'>Activer/Desactiver</th>    
                        <th className='bg-[#0DC4C7] text-white text-sm'>Supprimer</th>    
                    </tr>
                </thead>
                <tbody>  
                    <tr>
                        <th>1</th>
                        <td>{element.nom}</td>
                        <td>{element.prenom}</td>
                        <td>{element.role}</td>
                        <td><button className="btn bg-orange-400 text-white border-none">Désactiver</button></td>
                        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
                        {/* <td><button className="btn bg-green-500 text-white border-none">Activer</button></td> */}
                    </tr>    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListUsers