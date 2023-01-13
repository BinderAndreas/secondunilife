import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import '../styles/citydetailspage.css'
import AccomodationCard from '../components/AccomodationCard'
import axios from 'axios'
import students from "../assets/students.png";
import { useParams } from 'react-router-dom'

function CityDetailsPage({value}) {

  const{cityId}=useParams()

  const [properties,setAllProperties]=useState([])

  useEffect(() => {
         
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res=>{
        console.log(res?.data?.response)
        setAllProperties(res?.data?.response)
        console.log(properties)
      })
      .catch(err=>console.log(err))
    }, [])


  return (
    <div>
        <Banner title="Search Accomodation" text="Whatever you`re after, we can help you find the right student accommodation for you."/>
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
    <h1> 6 homes in </h1>
    <div className='accomodations-container'>
      {
        properties?.map((property)=>{
          return <AccomodationCard key={property?.city?.city_id} property={property}/>
        })
      }
      
    </div>
    <div className='student-container'>
      <div className='student-container-text'>
        <h1>Being a student in </h1>
        <p>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home.<br/><br/>

Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
        </div>
      <img src={students}/>
    </div>
    </div>
  )
}

export default CityDetailsPage