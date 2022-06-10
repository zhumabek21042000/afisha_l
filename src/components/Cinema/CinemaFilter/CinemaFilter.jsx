import React, { useState, useEffect } from "react";
import { currentDate, currentDay } from "../../../helpers/index";
import "./style.css";
import AfishaService from "../../../services/axios/index";

function CinemaFilter() {
  const [todayDate, setTodayDate] = useState("");
  const [tomorrowDate, setTomorrow] = useState("");
  const [status, setStatus] = useState("today");
  useEffect(() => {
    AfishaService.get_today_tomorrow().then((res) => {
      setTodayDate(res.data.today);
      setTomorrow(res.data.tomorrow);
    });
  }, []);
  const handleHallChange = () => {
    localStorage.setItem("cinema_status", "hall");
    window.location.reload(true);
  };

  const handleKinoChange = () => {
    localStorage.setItem("cinema_status", "kino");
    window.location.reload(true);
  };

  const handleTomorrowDateChange = () => {
    setStatus("tomorrow");
    localStorage.setItem("cinema_date", "tomorrow");
    localStorage.setItem("cinema_date_time", tomorrowDate ? tomorrowDate : "-");
  };
  const handleTodayDateChange = () => {
    setStatus("today");
    localStorage.setItem("cinema_date", "today");
    localStorage.setItem("cinema_date_time", todayDate ? todayDate : "-");
  };
  return (
    <>
      <div className="links-group">
        <div className="links-group-item">
          <span onClick={() => handleHallChange()}>По залу</span>
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
          <span onClick={() => handleKinoChange()}>По фильму</span>
        </div>
      </div>
      <div className="about-movie-date">
        {status === "today"
          ? todayDate.substring(0, todayDate.lastIndexOf(" "))
          : tomorrowDate.substring(0, tomorrowDate.lastIndexOf(" "))}
      </div>
      <div className="links-group">
        <div className="links-group-item">
          <span onClick={() => handleTodayDateChange()}>Сегодня</span>
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
          <span onClick={() => handleTomorrowDateChange()}>Завтра</span>
        </div>
      </div>
    </>
  );
}

export default CinemaFilter;
