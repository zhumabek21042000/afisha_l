import React from "react";
import CinemaSearch from "./CinemaSearch/CinemaSearch";
import "./style.css";

function CinemaList(props) {
  return (
    <>
      <div className="cinema-list-filter">
        <div className="title">Все кинотеатры города </div>
        <div className="city">{props.city ? props.city : "Астана"}</div>
      </div>
    </>
  );
}

export default CinemaList;
