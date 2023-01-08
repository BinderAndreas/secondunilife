import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CityCard from './CityCard'
import '../styles/accomodationcard.css'
import { MdSingleBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from 'react-icons/md';

function AccomodationCard({pic, costs, beds, bath, detached, furnished, place}) {

  const [oneCity,setOneCity]=useState([])

  useEffect(() => {
         
      axios.get(`https://unilife-server.herokuapp.com/cities?limit=1`)
      .then(res=>{
        console.log(res?.data?.response)
        setOneCity(res?.data?.response[0])
      })
      .catch(err=>console.log(err))
    }, [])


  return (
    <div className='homes-container'>
        <div className='home-box'>
          <img src={pic} alt="Alternativtext"/>
          <div classname="blue-details-area">
            <div className='blue-area-costs'>
              <h3>€110</h3>
              <p>pppw including bills</p>
            </div>
            <MdSingleBed />
            <p>5</p>
            <MdOutlineBathtub />
            <p>2</p>
          </div>
          <div className='white-area'>
            <div className='white-area-above'>
              <h4>Detached</h4>
              <h4>Fully Furnished</h4>
            </div>
            <MdOutlineLocationOn />
            <p>Heald Place Street, Rusholme, M14 4PF</p>
          </div>
          <MdOutlineHome />
          <h5>View Home</h5>
        </div>
    </div>
  )
}

export default AccomodationCard