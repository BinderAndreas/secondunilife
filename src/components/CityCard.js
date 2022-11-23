import React from "react"


function CityCard({city}) {

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
    zIndex: "-2"
}

const overlay = {
  position: "absolute",
  width: "400px",
  height: "300px",
  backgroundColor: "rgba(0,0,0,0.5)",
  borderRadius: "24px",
  zIndex: "-1",
}


  return (
      <div style={cardstyle}>
        <div style={overlay}></div>
        <h1>{city.name}</h1>
        <h2>{city.property_count}</h2>
      </div>
  )
}

export default CityCard