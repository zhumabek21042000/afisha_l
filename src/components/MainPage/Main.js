import React, { forwardRef } from "react";
import "./style.css";
import EventCity from "./EventCity/index";
import MovieEventSlider from "./MovieEventSlider";
import CinemaList from "./Cinema/CinemaList";
import MoviesSoon from "./Movies/MovieSoon/index";
import { movie_list } from "./movie_list_test.js";
import { movie_soon_list } from "./movie_soon_list_test.js";
// import TextEditor from "../TextEditor";
const Main = () => {
  // const EventCityRef = React.forwardRef((props, ref)=>(

  //   <EventCity {...props} innerRef={ref}/>
  // ))
  return (
    <div className="container">
      <EventCity city={"Астана"}></EventCity>
      <MovieEventSlider movie_list={movie_list}></MovieEventSlider>
      <CinemaList></CinemaList>
      <MoviesSoon movie_list={movie_soon_list}></MoviesSoon>

      {/* <TextEditor></TextEditor> */}
    </div>
  );
};

export default Main;
