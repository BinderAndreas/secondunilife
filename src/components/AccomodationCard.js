import React,{useEffect,useState} from 'react'
import axios from 'axios'
import CityCard from './CityCard'
import '../styles/accomodationcard.css'
import { MdSingleBed, MdOutlineBathtub, MdOutlineHome, MdOutlineLocationOn } from 'react-icons/md';



function AccomodationCard({property}) {


  return (
    <div className='homes-container'>
        <div className='home-box'>
          <p>{property?.city?.city_id}</p>
          <img src={property?.city?.images[0]} alt="Alternativtext"/>
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
          <div className='homedetailspage'><a href="/HomeDetailsPage">View Home</a></div>
        </div>
    </div>
  )
}

export default AccomodationCard