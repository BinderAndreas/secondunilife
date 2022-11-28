import React,{useEffect,useState} from 'react'
import '../styles/homepage.css'
import Banner from '../components/Banner'
import CityCard from '../components/CityCard'
import { BiSearchAlt } from "react-icons/bi";
import { MdChecklistRtl } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { GrSelect } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import person from "../assets/person.png";



import axios from 'axios'

function Homepage() {

  const [topCities,setTopCities]=useState([])
  const [allCities,setAllCities]=useState([])
  const bedNumbers = [1,2,3,4,5,6,7,8,9,10];

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
              <label for="city-search"></label>
                <select name="city-search" id="city-search" placeholder="Search by city">
                  {
                    allCities?.map((city)=> {
                      return <option value={city.name} key={city._id}>{city.name}</option>
                    })
                  }
                </select>
                <label for="bedroom-search"></label>
                <select name="bedroom-search" id="bedroom-search" placeholder="Any bedroom">
                  {
                    bedNumbers.map(item=>{
                    return <option value={item}>{item}</option>
                    })
                  }
                </select>
                <div className='citydetailspage'><a href="/CityDetailsPage">Find Homes</a></div>
            </div>
            <h1>Student accommodations in our top cities</h1>
            <div className='citycard-container'>
              {
                topCities?.map((city)=>{
                  return <CityCard key={city._id} city={city}/>
                })
              }
            </div>
            <div className='allcities'><a href="/allcities">See all Cities</a></div>
            
        </div>
        <div className='comparison'>
          <h1>Compare all inclusive student homes.</h1>
          <div className='comparison-container'>
            <div className='search'>
              <BiSearchAlt className='icon-big'/>
              <h1>Search</h1>
              <div className='center'><p>Find your dream home in the perfect area near your university.</p></div>
              </div>
            
            <div className='compare'>
              <MdChecklistRtl className='icon-big'/>
              <h1>Compare</h1>
              <div className='center'><p>Compare student accommodation to find the right home for you.</p></div>
            </div>
            <div className='bills'>
              <RiBillLine className='icon-big'/>
              <h1>Bills Included</h1>
              <div className='center'><p>Bills are included in all rent prices. No hidden fees.</p></div>
            </div>
          
          </div>
        </div>
        <div className='search-compare-container'>
          <div className='selection-container'>
            <div className='selection'>
              <GrSelect className='icon-small' />
              <div className='selection-text'>
                <h1>Best selection</h1>
                <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              </div>
            </div>
            <div className='selection'>
              <BsHeart className='icon-small'/>
              <div className='selection-text'>
                <h1>Your favorite</h1>
                <p>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
          <div className='citydetailspage'><a href="/CityDetailsPage">Search & Compare</a></div>
          </div>
          <img src={person}/>

        </div>
          
        
    </div>
  )
}

export default Homepage