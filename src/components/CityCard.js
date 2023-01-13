import React from "react"
import CityDetailsPage from "../pages/CityDetailsPage"




function CityCard({city, key}) {

  
const cardstyle = {
    backgroundImage:`url('${city.image_url}')`, 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    color: "white", 
    width: "400px",
    height: "300px",
    margin: "20px",
    borderRadius: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: "0"
}

const overlay = {
  position: "absolute",
  width: "400px",
  height: "300px",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: "24px",
  zIndex: "-2",
  backdropFilter: "blur(2px)",
}


  return (
      <div style={cardstyle}>
        <div style={overlay}></div>
        <h1><a href="asd">{city.name}</a></h1>
        {console.log(key)}
        <h2>{city.property_count} properties</h2>
      </div>
  )
}

export default CityCard