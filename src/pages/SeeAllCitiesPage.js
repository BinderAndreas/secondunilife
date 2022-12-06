import React,{useEffect,useState} from 'react'
import '../styles/seeallcitiespage.css'
import Banner from '../components/Banner'
import axios from 'axios'

function SeeAllCitiesPage() {

    const [allCities,setAllCities]=useState([])

    useEffect(() => {
           
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res=>{
          console.log(res.data.response)
          setAllCities(res.data.response)
        })
        .catch(err=>console.log(err))
      }, [])

  return (
    <div className='try'>
        <Banner title='Student Accomodation' text='UniLife have student accommodation available across the UK.
            Whatever you’re after, we can help you find the right student accommodation for you. '/>
        <h1>Search by City</h1>
        <div className='city-container'>
              {
                allCities?.map((city)=>{
                  return <button className='city-button' key={city._id} city={city} path='/CityDetailsPage/city._id'>{city}</button>
                })
              }
            </div>
    </div>
  )
}

export default SeeAllCitiesPage