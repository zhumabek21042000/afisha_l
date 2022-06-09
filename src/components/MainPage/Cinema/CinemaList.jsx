import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AfishaService from "../../../services/axios";
const CinemaList = (props) => {
  const [cinemaCount, setCinemaCount] = useState(0);
  const [cinemaList, setCinemaList] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    AfishaService.get_cinemas_by_city_id(
      parseInt(localStorage.getItem("city_id"))
    ).then((res) => {
      setCinemaList(res.data.data);
      setCinemaCount(res.data.data.length);
    });
  }, []);
  return (
    <div className="cinema-block">
      <div className="center-side">
        <div className="d-flex align-center space-between mb-32">
          <Link to={"/cinemas"} className="title link">
            Кинотеатры
          </Link>
          <div className="d-flex align-center">
            <Link className="link small text-primary" to="/cinemas">
              Все {cinemaCount ? cinemaCount : 0}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <ul className="cinema-list">
            {cinemaList &&
              cinemaList.map((cinema) => (
                <li>
                  <Link to={"/cinema/" + cinema.id} className="cinema-mobile">
                    <div
                      className="cinema-mobile-image"
                      style={{
                        backgroundImage: `url('https://cdn.kino.kz/cinema/91/p223x267.png')`,
                      }}
                    ></div>
                    <div className="ml-20">
                      <div className="cinema-mobile-title">{cinema.name}</div>
                      <div className="cinema-mobile-subtitle">
                        {cinema.address}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CinemaList;
