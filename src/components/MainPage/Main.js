import React, {forwardRef} from 'react'
import "./style.css";
import EventCity from "./EventCity/index";
import CinemaTheatre from "./CinemaTheatre/index"
import "./style.css"


const Main = () => {
  // const EventCityRef = React.forwardRef((props, ref)=>(
    
  //   <EventCity {...props} innerRef={ref}/>
  // ))
  return (
    <div className="container">
        <EventCity city={"Астана"}></EventCity>
        <CinemaTheatre></CinemaTheatre>
    </div>
  )
}

export default Main