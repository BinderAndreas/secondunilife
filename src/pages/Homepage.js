import React,{useEffect,useState} from 'react'
import '../styles/homepage.css'
import Banner from '../components/Banner'
import CityCard from '../components/CityCard'

import axios from 'axios'

function Homepage() {

  const [topCities,setTopCities]=useState([])
  const [allCities,setAllCities]=useState([])

useEffect(() => {
  axios.get(`https://unilife-server.herokuapp.com/cities?limit=9`)
  .then(res=>{
    console.log(res.data.response)
    setTopCities(res.data.response)
  })
  .catch(err=>console.log(err))

  axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
  .then(res=>{
    console.log(res.data.response)
    setAllCities(res.data.response)
  })
  .catch(err=>console.log(err))
}, [])


  return (
    <div className='homepage-container'>
        <Banner title='Find student homes with bills included' text='A simple and faster way to search for student accomodation'/>
        <div className='search-container'>
            <div className='city-search'>
              <label for="city-search">Search by city</label>
                <select name="city-search" id="city-search">
                  {
                    allCities?.map((city)=> {
                      return <option value={city.name} key={city._id}>{city.name}</option>
                    })
                  }
                </select>
                  
            </div>
            <div className='citycard-container'>
              {
                topCities?.map((city)=>{
                  return <CityCard key={city._id} city={city}/>
                })
              }
            </div>
          
        </div>
    </div>
  )
}

export default Homepage