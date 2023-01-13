import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CityCard from './CityCard'
import '../styles/accomodationcard.css'
import { MdSingleBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from 'react-icons/md';
import {Link,useNavigate} from "react-router-dom"




function AccomodationCard({property}) {

  let navigate=useNavigate();

  return (
    <div className='homes-container' onClick={()=>navigate("../pages/homedetails/{property}")}> 
        <div className='home-box'>
          <p>{property?.city_id}</p>
          <img src={property?.images[0]} alt="Alternativtext"/>
          <div classname="blue-details-area">
            <div className='blue-area-costs'>
              <h3>€110</h3>
              <p>pppw including bills</p>
            </div>
            <div className='bedbath-container'>
              <MdSingleBed />
              <p>{property?.bedroom_count}</p>
              <MdOutlineBathtub />
              <p>{property?.bathroom_count}</p>
            </div>
          </div>
          <div className='white-area'>
            <div className='white-area-above'>
              <h4>{property?.property_type}</h4>
              <div className='address'>
                <MdOutlineLocationOn /> 
                <p>Address</p>
              </div>
              
            </div>
            <h4>{property?.furnished}</h4>
          </div>
          
          <div className='homedetailspage'><a href={`/homedetails/${property?._id}`}><MdOutlineHome /> View Home</a></div>
        </div>
    </div>
  )
}

export default AccomodationCard