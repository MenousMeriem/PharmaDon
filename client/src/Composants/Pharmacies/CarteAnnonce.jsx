import image from '../../assets/Pharmacies/medicament.jpg'


function CarteAnnonce({element}) { 

  // const handleOnClick = async() => {
  //   const user = localStorage.getItem('Utilisateur')
  //   const currentUserObject = JSON.parse(user)
  //   const config = {
  //     headers: {
  //         Authorization: `Bearer ${currentUserObject.accessToken}`
  //     }
  // } 
  //   try {
  //     await axios.put('http://localhost:5000/Annonce/signalerAnnonce/'._id, signalement, config)
  //     toast.success('Publication signalée')
  //   } catch (error) {
  //     toast.error(error.response?.data?.message || message.error)
  //   }
  // }
  console.log(element)

  return (
    <div className='p-10 '>
        <div className="card card-compact bg-base-100 shadow-xl w-80 lg:w-96 lg:h-full text-[#203374]">
            <figure><img className='w-60' src={image}/></figure>
            <div className="card-body m-5">
                <h2 className="text-sm"> Nom du médicament : {element.nomMedicament} </h2> 
            </div>
            {element.categorie ==='Demande' ? (
            <span className="indicator-item badge badge-primary w-full h-10 bg-[#203374] rounded-md">Demande</span> 
            ):( 
           <span className="indicator-item badge badge-primary w-full h-10 bg-[#219EBC] border-[#219EBC] rounded-md">Don</span> 
           )}
            
        </div>
    </div>
  )
}

export default CarteAnnonce