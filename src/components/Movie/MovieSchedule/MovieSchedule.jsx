import React, { useState, useEffect } from "react";
import "./style.css";
import ModalSchedule from "./ModalWindow";
import AfishaService from "../../../services/axios";

const MovieSchedule = (props) => {
  const [seances, setSeances] = useState();
  useEffect(() => {
    props.seances && setSeances(props.seances);
    console.log(props.seances);
  });
  return (
    <>
      {seances &&
        seances.map((seance) => {
          <div className="cinema-schedule-row">
            <div>
              <div className="schedule-time">
                <div>{seance.show_time ? seance.show_time : " --- "}</div>
              </div>
            </div>
            <div className="block" style={{ width: "20%" }}>
              <div className="cinema-title">
                <a className="link" href="/cinema/59">
                  {seance.cinema_name ? seance.cinema_name : " --- "}
                </a>
              </div>
              <span className="cinema-subtitle">
                {seance.hall_name ? seance.hall_name : " --- "}
              </span>
            </div>
            <div className="row-divider">
              <div className="session-lang-tag">Рус</div>
            </div>
            <div className="row-divider">{seance.price_adult}</div>
            <div className="row-divider">{seance.price_kid}</div>
            <div className="row-divider">{seance.price_student}</div>
            <div className="row-divider">{seance.price_vip}</div>
            <div style={{ width: "15%" }}>
              <button
                className="btn active-secondary primary-dark"
                type="button"
              >
                Купить билет
              </button>
            </div>
          </div>;
        })}
    </>
  );
};

export default MovieSchedule;
