import React,{useEffect,useState} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineBed, MdOutlineBathtub, MdCheck } from 'react-icons/md';
import {IoMdHeartEmpty} from 'react-icons/io';

function HomeDetailsPage() {
 const {id} = useParams()
 const [properties,setProperties] = useState("")

 useEffect(() => {
   axios.get(`https://unilife-server.herokuapp.com/properties/${id}`)
    .then(res=>{
      console.log(res.data)
      setProperties(res.data)
    })
   .catch(err=>console.log(err))
 }, [])
 

    
  return (
    <div>
        <a href="../citydetails"><AiOutlineArrowLeft /> Back to Search</a>
        <div className='property-pictures-container'>
            <img src={properties?.images && properties?.images[0]}/>
            <img src={properties?.images && properties?.images[1]}/>
            <img src={properties?.images && properties?.images[2]}/>
            <img src={properties?.images && properties?.images[3]}/>
        </div>
        <div className='details-container'>
          <h1>Holmes Street, Camden Leeds, NW5 3AN</h1>
          <div className='special-details'>
            <p>Bedrooms</p>
            <MdOutlineBed />
            <h1>{properties?.bedroom_count}</h1>
          </div>
          <div className='special-details'>
            <p>Bathrooms</p>
            <MdOutlineBathtub />
            <h1>{properties?.bathroom_count}</h1>
          </div>
          <div className='special-details'>
            <p>Property Type</p>
            <h1>{properties?.property_type}</h1>
          </div>
          <div className='special-details'>
            <p>Price</p>
            <h1>{properties?.bedroom_prices[0]}</h1>
          </div>
          <div className='special-details'>
            <p>Furnished type</p>
            <h1>{properties.availability}</h1>
          </div>
        </div>
        <div className='buttons-container'>
          <button><IoMdHeartEmpty/>Shortlist</button>
          <button>Book Viewing</button>
        </div>
        <div className='description-container'>
          <h1>Description</h1>
          <p>Remodelled to perfection! This beautiful home is located close to shopping and dining. Here are just a few of its wonderful features: cozy fireplace, new kitchen cabinets, stainless steel sink, modern quartz counter tops, wood flooring, remodelled bathrooms, freshly painted, central a/c, attached two-car garage, large back yard, and so much more!</p>
        </div>
        <div className='prices-container'>
          <div>
            <p>Bedroom 1</p>
            <p>{properties?.bedroom_prices[0]} per week</p>
          </div>
          <div>
            <p>Bedroom 2</p>
            <p>{properties?.bedroom_prices[1]} per week</p>
          </div>
          <div>
            <p>Bedroom 3</p>
            <p>{properties?.bedroom_prices[2]} per week</p>
          </div>
          <div>
            <p>Bedroom 4</p>
            <p>{properties?.bedroom_prices[3]} per week</p>
          </div>
        </div>
        <div className='features-container'>
          <div>
            <MdCheck />
            <p>{properties?.key_features && properties?.key_features[0]}</p>
          </div>
          <div>
            <MdCheck />
            <p>{properties?.key_features && properties?.key_features[1]}</p>
          </div>
          <div>
            <MdCheck />
            <p>{properties?.key_features && properties?.key_features[2]}</p>
          </div>
          <div>
            <MdCheck />
            <p>{properties?.key_features && properties?.key_features[3]}</p>
          </div>
          <div>
            <MdCheck />
            <p>{properties?.key_features && properties?.key_features[4]}</p>
          </div>
        </div>
    </div>
  )
}

export default HomeDetailsPage