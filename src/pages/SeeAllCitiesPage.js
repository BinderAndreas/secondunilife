import React,{useEffect,useState} from 'react'
import '../styles/seeallcitiespage.css'
import Banner from '../components/Banner'
import axios from 'axios'

function SeeAllCitiesPage() {

    const [allCities,setAllCities]=useState([])

    useEffect(() => {
           
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
        .then(res=>{
          console.log(res?.data?.response)
          setAllCities(res?.data?.response)
        })
        .catch(err=>console.log(err))
      }, [])

  return (
    <div className='city-body'>
        <Banner title='Student Accomodation' text='UniLife have student accommodation available across the UK.
            Whatever you’re after, we can help you find the right student accommodation for you. '/>
        <div className='search-container'>
          <div className='search-areas'>
            <h2>Bedroom</h2>
            <div className='search'>
              <label for="bedroom-search"></label>
                <select name="bedroom-search" id="bedroom-search" placeholder="Any Bedroom">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
          </div>
        </div>
        <div className='search-areas'>
            <h2>Bathroom</h2>
            <div className='search'>
              <label for="bathroom-search"></label>
                <select name="bathroom-search" id="bathroom-search" placeholder="Any Bathroom">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
          </div>
        </div>
        <div className='search-areas'>
            <h2>Max Price</h2>
            <div className='search'>
              <label for="price-search"></label>
                <select name="price-search" id="price-search" placeholder="Any price">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
          </div>
        </div>
        <div className='search-areas'>
            <h2>Home Type</h2>
            <div className='search'>
              <label for="hometype-search"></label>
                <select name="hometype-search" id="hometype-search" placeholder="Any type">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
          </div>
        </div>
    </div>
        <h1>Search by City</h1>
        <div className='city-container'>
              {
                allCities?.map((city)=>{
                  return <button className='city-button' key={city?._id} city={city}>{city?.name}</button>
                })
              }
            </div>
    </div>
  )
}

export default SeeAllCitiesPage