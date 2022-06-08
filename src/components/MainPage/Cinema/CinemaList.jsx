import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CinemaList = (props) => {
  const [cinemaCount, setCinemaCount] = useState(0);
  return (
    <div className="cinema-block">
      <div className="center-side">
        <div className="d-flex align-center space-between mb-32">
          <Link to={"/cinemas"} className="title link">
            Кинотеатры
          </Link>
          <div className="d-flex align-center">
            <span className="link large text-primary-dark mr-32">На карте</span>
            <Link className="link small text-primary" to="/cinemas">
              Все {cinemaCount}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <ul className="cinema-list">
            <li>
              <Link to={"/cinema/1"} className="cinema-mobile">
                <div
                  className="cinema-mobile-image"
                  style={{
                    backgroundImage: `url('https://cdn.kino.kz/cinema/91/p223x267.png')`,
                  }}
                ></div>
                <div className="ml-20">
                  <div className="cinema-mobile-title">
                    Cinemax (Dostyk Plaza) Dolby Atmos
                  </div>
                  <div className="cinema-mobile-subtitle">
                    ул. Сейфуллина, 617, ТРЦ «Forum Almaty», 3-й и 5-й этажи; +7
                    775 095 40 83 (администрация)
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/cinema/1"} className="cinema-mobile">
                <div
                  className="cinema-mobile-image"
                  style={{
                    backgroundImage: `url('https://cdn.kino.kz/cinema/91/p223x267.png')`,
                  }}
                ></div>
                <div className="ml-20">
                  <div className="cinema-mobile-title">
                    Cinemax (Dostyk Plaza) Dolby Atmos
                  </div>
                  <div className="cinema-mobile-subtitle">
                    ул. Сейфуллина, 617, ТРЦ «Forum Almaty», 3-й и 5-й этажи; +7
                    775 095 40 83 (администрация)
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link className="cinema-mobile" to={"#"}>
                <div
                  className="cinema-mobile-image"
                  style={{
                    backgroundImage: `url('https://cdn.kino.kz/cinema/93/p223x267.png')`,
                  }}
                ></div>
                <div className="ml-20">
                  <div className="cinema-mobile-title"></div>
                  <div className="cinema-mobile-subtitle"></div>
                </div>
              </Link>
            </li>

            <li>
              <Link className="cinema-mobile" to={"#"}>
                <div
                  className="cinema-mobile-image"
                  style={{
                    backgroundImage: `url('https://cdn.kino.kz/cinema/92/p223x267.png')`,
                  }}
                ></div>
                <div className="ml-20">
                  <div className="cinema-mobile-title"></div>
                  <div className="cinema-mobile-subtitle"></div>
                </div>
              </Link>
            </li>
            <li>
              <Link className="cinema-mobile" to={"#"}>
                <div
                  className="cinema-mobile-image"
                  style={{
                    backgroundImage: `url('https://cdn.kino.kz/cinema/167/p223x267.png')`,
                  }}
                ></div>
                <div className="ml-20">
                  <div className="cinema-mobile-title"></div>
                  <div className="cinema-mobile-subtitle"></div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CinemaList;
