import React, { useState, useEffect } from "react";
import AfishaService from "../../../services/axios/index";
import CinemaSearch from "./CinemaSearch/CinemaSearch";
import "./style.css";

function CinemaList(props) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState({});
  const [cityId, setCityId] = useState(1);
  // useEffect(() => {
  //   AfishaService.get_all_cities().then((res) => {
  //     setCities(res.data.data);
  //   });
  //   setCityId(AfishaService.get_id_of_city())
  // });
  const handleValueChange = (event) => {
    setCity(event.target.value);
    localStorage.setItem("city_name", event.target.value);
  };
  return (
    <>
      <div className="cinema-list-filter">
        <div className="title">Все кинотеатры города </div>
        {/* <select
          value={
            localStorage.getItem("city_name")
              ? localStorage.getItem("city_name")
              : " --- "
          }
          onChange={handleValueChange}
        >
          {cities &&
            cities.map((city_arr) => (
              <option
                key={city_arr.id}
                name={city_arr.id}
                value={city_arr.name}
                // value={JSON.stringify([city_arr.id, city_arr.name])}
              >
                {city_arr.name}
              </option>
            ))}
        </select> */}
      </div>
    </>
  );
}

export default CinemaList;
