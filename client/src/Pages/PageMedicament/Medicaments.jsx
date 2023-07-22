import React, {useState, useEffect} from 'react'
import MedicamentCarte from './MedicamentCarte'
import BarreRecherche from '../../Composants/BarreRecherche'
import animation from '../../assets/Annimations/102003-medicine.json'
import Lottie from 'lottie-react'
import {toast} from 'react-toastify'
import axios from 'axios'


function Medicaments({fetching, setFetching}) {
    const [data, setData] = useState([])  
    const [loading, setLoading ] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState("")

    const fetchData = async() => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Annonce/AfficherAnnonce?page=${currentPage}`)
            console.log(reponse.data)
            setData(reponse.data)
            setTotalPages(reponse.data.pages)
        } catch (error) {
            toast.error(error.message)            
        }
        finally {
            setLoading(false)
        }
    }
    const searchData = async() => {
        try {
            const reponse = await axios.get(`http://localhost:5000/Annonce/AfficherAnnonce?page=${currentPage}&search=${search}`)
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
    }, [currentPage])

    if(loading) return ( <Lottie animationData={animation} /> )
    
    const pages = []

    const handleOnPageChange = (e) => {
        setCurrentPage(e.target.textContent)
    }
    
    // console.log(data)
    for(let i =1; i<= totalPages; i++) {
        pages.push(<button onClick={handleOnPageChange} className={currentPage === i ? "join-item btn btn-active bg-[#219EBC] border-none":"join-item btn border-none bg-[#203374]"} key={i}>{i}</button>)
    }
  return (
    <div>
        <BarreRecherche search={search} setSearch={setSearch} searchData={searchData}/>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 '>
          {data.annonce.length > 0 ? data.annonce.map(element => (
              <MedicamentCarte key={element._id} fetching={fetching} setFetching={setFetching} element={element} />
          )) : <h1> Aucun médicament n'est disponible  </h1> } 
        </div>
        <div className="join flex justify-center my-8">
           {pages}
        </div>
    </div>
  )
}

export default Medicaments