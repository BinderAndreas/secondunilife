import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import '../styles/citydetailspage.css'
import AccomodationCard from '../components/AccomodationCard'
import axios from 'axios'
import students from "../assets/students.png";
import { useParams } from 'react-router-dom'

function CityDetailsPage() {

  const{cityId}=useParams()

  const [properties,setAllProperties]=useState([])
  const [cityName, setCityName]=useState("")
  const [propertyCount, setPropertyCount]=useState("")
  const [studentLife, setStudentLife]=useState("")
  const [universities, setUniversities]=useState("")

  useEffect(() => {
         
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
      .then(res=>{
        console.log(res?.data?.response)
        setAllProperties(res?.data?.response)
        setCityName(res?.data?.city_name)
        setPropertyCount(res?.data?.total)
        console.log(res.data)
      })
      .catch(err=>console.log(err))
    }, [])

    useEffect(() => {
         
      axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
      .then(res=>{
        console.log(res?.data?.data[0])
        setStudentLife(res?.data?.data[0].student_life)
        setUniversities(res?.data?.data[0].universities)
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
    <h1> {propertyCount} homes in {cityName} </h1>
    <div className='accomodations-container'>
      {
        properties?.map((property)=>{
          return <AccomodationCard key={property?.city?.city_id} property={property}/>
        })
      }
      
    </div>
    <div className='student-container'>
      <div className='student-container-text'>
        <h1>Being a student in {cityName}</h1>
        <p>{studentLife}<br/><br/>
            {universities}</p>
        </div>
      <img src={students}/>
    </div>
    </div>
  )
}

export default CityDetailsPage