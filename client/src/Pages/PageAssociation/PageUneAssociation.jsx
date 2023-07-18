import {useState, useEffect} from 'react'
import CarteAnnonce from '../../Composants/Associations/CarteAnnonce'
import Breadcrumbs from '../../Composants/Associations/Breadcrumbs'
import Divider from '../../Composants/Pharmacies/Divider'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PageUneAssociation({fetching, setFetching}) {
    
  const {id} = useParams()
    const [data, setData] = useState([])  
    const [loading, setLoading ] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const fetchData = async() => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Annonce/afficherAnnonceAssociation?page=${currentPage}&id=${id}`)
            setData(reponse.data)
            setTotalPages(reponse.data.pages)
        } catch (error) {
          toast.error(error.message)            
        }
        finally {
          setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData() 
    },[currentPage])

    if(loading) return ( <Lottie animationData={animation} /> )
    
    const pages = []
    const handleOnPageChange = (e) => {
      setCurrentPage(e.target.textContent)
    }
    for(let i =1; i<= totalPages; i++) {
        pages.push(<button onClick={handleOnPageChange} className={currentPage === i ? "join-item btn btn-active bg-[#219EBC] border-none":"join-item btn border-none bg-[#203374]"} key={i}>{i}</button>)
    }


    return (
    <div>
        <Breadcrumbs/>
        {/* <Divider/> */}
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
          {data.medicaments && data.medicaments.length > 0 ? data.medicaments.map(element => (
                <CarteAnnonce key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
            )) : <h1> Aucun médicament n'est disponible  </h1> }
        </div>
        <div className="join flex justify-center my-8">
           {pages}
        </div>
    </div>
  )
}


export default PageUneAssociation

