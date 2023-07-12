import React from 'react'

function ListUsers({element}) {
  return (
    <tr>
        <th>1</th>
        <td>{element.nom}</td>
        <td>{element.prenom}</td>
        <td>{element.role}</td>
        <td><button className="btn bg-orange-400 text-white border-none">Désactiver</button></td>
        <td><button className='btn bg-red-700 text-white border-none'> Supprimer </button></td>
        {/* <td><button className="btn bg-green-500 text-white border-none">Activer</button></td> */}
    </tr>    
                
  )
}

export default ListUsers