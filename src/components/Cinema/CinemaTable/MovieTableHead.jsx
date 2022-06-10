import React, { useEffect, useState } from "react";
import "./style.css";
import MovieSchedule from "../../Movie/MovieSchedule/MovieSchedule";
import { useParams, Link } from "react-router-dom";
import AfishaService from "../../../services/axios";

function MovieTableHead() {
  const [seances, setSeances] = useState([]);
  const dateTime = localStorage.getItem("movie_date_time");

  const params = useParams();
  useEffect(() => {
    AfishaService.get_seances_by_movie(
      params.id,
      localStorage
        .getItem("movie_date_time")
        .substring(0, dateTime.lastIndexOf(" "))
    ).then((res) => {
      setSeances(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  const [status, setStatus] = useState(
    localStorage.getItem("time_cinema_status")
  );
  return (
    <div className="cinema-schedule halls">
      <div className="cinema-schedule-head">
        <div className="container">
          {status === "time" ? (
            <>
              <div style={{ width: "10%" }}>Время</div>
              <div style={{ width: "20%" }}>Кинотеатр</div>
            </>
          ) : (
            <>
              <div style={{ width: "20%" }}>Кинотеатр</div>
              <div style={{ width: "10%" }}>Время</div>
            </>
          )}

          <div style={{ width: "10%" }}>Язык</div>
          <div style={{ width: "10%" }}>Взрослый</div>
          <div style={{ width: "10%" }}>Время</div>
          <div style={{ width: "10%" }}>Детский</div>
          <div style={{ width: "10%" }}>Студент</div>
          <div style={{ width: "15%" }}>VIP</div>
        </div>
      </div>
      <div className="container cinema-schedule-body">
        {seances &&
          seances.map((seance) => (
            <div className="cinema-schedule-row">
              <div>
                <div className="schedule-time">
                  <div>
                    {seance.show_time
                      ? seance.show_time.substring(
                          seance.show_time.lastIndexOf(" "),
                          seance.show_time.lastIndexOf(":")
                        )
                      : " --- "}
                  </div>
                </div>
              </div>
              <div className="block" style={{ width: "20%" }}>
                <div className="cinema-title">
                  <Link className="link" to={`/cinema/${seance.cinema_id}`}>
                    {seance.cinema_name ? seance.cinema_name : " --- "}
                  </Link>
                </div>
                <span className="cinema-subtitle">
                  {seance.hall_name ? seance.hall_name : " --- "}
                </span>
              </div>
              <div className="row-divider">
                <div className="session-lang-tag">Рус</div>
              </div>
              <div className="row-divider">
                {seance.price_adult ? seance.price_adult : " --- "}
              </div>
              <div className="row-divider">
                {seance.price_kid ? seance.price_kid : " --- "}
              </div>
              <div className="row-divider">
                {seance.price_student ? seance.price_student : " --- "}
              </div>
              <div className="row-divider">
                {seance.price_vip ? seance.price_vip : " --- "}
              </div>
              <div style={{ width: "15%" }}>
                <button
                  className="btn active-secondary primary-dark"
                  type="button"
                >
                  Купить билет
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MovieTableHead;
