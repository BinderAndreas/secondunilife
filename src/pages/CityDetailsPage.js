import React from 'react'
import Banner from '../components/Banner'

function CityDetailsPage() {
  return (
    <div>
        <Banner title="Search Accomodation" text="Whatever you’re after, we can help you find the right student accommodation for you."/>
        <div className='search-container'>
          <div className='search-areas'>
            <h2>Bedroom</h2>
            <div className='bedroom-search'>
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
    </div>
    </div>
  )
}

export default CityDetailsPage