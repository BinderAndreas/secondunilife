import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CityCard from './CityCard'
import '../styles/accomodationcard.css'
import { MdSingleBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from 'react-icons/md';



function AccomodationCard({property}) {


  return (
    <div className='homes-container'>
        <div className='home-box'>
          <p>{property?.city_id}</p>
          <img src={property?.images[0]} alt="Alternativtext"/>
          <div classname="blue-details-area">
            <div className='blue-area-costs'>
              <h3>€110</h3>
              <p>pppw including bills</p>
            </div>
            <MdSingleBed />
            <p>{property?.bedroom_count}</p>
            <MdOutlineBathtub />
            <p>{property?.bathroom_count}</p>
          </div>
          <div className='white-area'>
            <div className='white-area-above'>
              <h4>{property?.property_type}</h4>
              <h4>{property?.furnished}</h4>
            </div>
            <MdOutlineLocationOn />
            <p>Address</p>
          </div>
          <MdOutlineHome />
          <div className='homedetailspage'><a href={`/homedetails/${property._id}`}>View Home</a></div>
        </div>
    </div>
  )
}

export default AccomodationCard