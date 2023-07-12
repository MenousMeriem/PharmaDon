import React from 'react'

function ListUsers() {
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
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><button className="btn bg-orange-400 text-white border-none">Désactiver</button></td>
                        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td><button className="btn bg-green-500 text-white border-none">Activer</button></td>
                        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td><button className="btn bg-green-500 text-white border-none">Activer</button></td>
                        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
                    </tr>
                    
                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td><button className="btn bg-green-500 text-white border-none">Activer</button></td>
                        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
                    </tr>
                    

                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListUsers