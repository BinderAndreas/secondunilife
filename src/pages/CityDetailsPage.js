import React from 'react'
import Banner from '../components/Banner'
import '../styles/citydetailspage.css'
import AccomodationCard from '../components/AccomodationCard'

function CityDetailsPage(city) {
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
    <div className='accomodations-container'>
      <h1> homes in {city.name}</h1>
      <AccomodationCard />
    </div>
    </div>
  )
}

export default CityDetailsPage