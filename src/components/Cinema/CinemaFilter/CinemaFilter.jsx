import React from "react";
import { currentDate, currentDay } from "../../../helpers/index";
import "./style.css";

function CinemaFilter() {
  return (
    <>
      <div className="links-group">
        <div className="links-group-item active">
          <span>По залу</span>
        </div>
        <svg
          width="1"
          height="24"
          viewBox="0 0 1 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" x2="0.5" y2="24" stroke="#9797A5"></line>
        </svg>
        <div className="links-group-item">
          <span>По фильму</span>
        </div>
      </div>
      <div className="about-movie-date">
        {currentDate()}, {currentDay()}
      </div>
      <div className="links-group">
        <div className="links-group-item">
          <span>Сегодня</span>
        </div>
        <svg
          width="1"
          height="24"
          viewBox="0 0 1 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" x2="0.5" y2="24" stroke="#9797A5"></line>
        </svg>
        <div className="links-group-item active">
          <span>Завтра</span>
        </div>
        <svg
          width="1"
          height="24"
          viewBox="0 0 1 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" x2="0.5" y2="24" stroke="#9797A5"></line>
        </svg>
        <div className="links-group-item">
          <span>По дате</span>
        </div>
      </div>
    </>
  );
}

export default CinemaFilter;
