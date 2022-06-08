import React from "react";
import "./style.css";
import ModalSchedule from "./ModalWindow";

const MovieSchedule = () => {
  return (
    <div className="cinema-schedule-row">
      <div>
        <div className="schedule-time">
          <div>22:10</div>
        </div>
      </div>
      <div className="block" style={{ width: "20%" }}>
        <div className="cinema-title">
          <a className="link" href="/cinema/59">
            Иллюзион Maxima
          </a>
        </div>
        <span className="cinema-subtitle">Зал 1</span>
      </div>
      <div className="row-divider">
        <div className="session-lang-tag">рус</div>
      </div>
      <div className="row-divider">1 800 ₸</div>
      <div className="row-divider">1 300 ₸</div>
      <div className="row-divider">1 500 ₸</div>
      <div className="row-divider">-</div>
      <div style={{ width: "15%" }}>
        <button className="btn active-secondary primary-dark" type="button">
          Купить билет
        </button>
      </div>
    </div>
  );
};

export default MovieSchedule;
