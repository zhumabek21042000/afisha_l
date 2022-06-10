import React, { useEffect, useState } from "react";
import AfishaService from "../../../services/axios";
import { useParams, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
import Seats from "../../Seats/Seats";

function CinemaSchedule() {
  const [seances, setSeances] = useState([]);
  const dateTime = localStorage.getItem("cinema_date_time");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  useEffect(() => {
    AfishaService.get_seances_by_cinema(
      params.id,
      localStorage
        .getItem("cinema_date_time")
        .substring(0, localStorage.getItem("cinema_date_time").lastIndexOf(" "))
    ).then((res) => {
      setSeances(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  const [status, setStatus] = useState(
    localStorage.getItem("time_cinema_status")
  );
  return (
    <>
      <div className="cinemas-schedule halls">
        <div className="cinemas-schedule-head">
          <div className="container">
            <div>
              <div className="head-block seance">Время</div>
              <div className="head-block movie">Фильм</div>
              <div className="head-block lang">Язык</div>
              <div className="head-block price">Взрослый</div>
              <div className="head-block price">Детский</div>
              <div className="head-block price">Студент</div>
              <div className="head-block price">VIP</div>
              <div className="head-block action"></div>
            </div>
          </div>
        </div>
        <div className="cinemas-schedule-body container">
          {seances &&
            seances.map((seance) => (
              <>
                {seance.hall_name ? seance.hall_name : " --- "}
                <div className="cinemas-schedule-line">
                  <div>
                    <div className="cinemas-schedule-row">
                      <div className="seance">
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
                      <div className="row-divider movie">
                        <Link
                          to={`/movie/` + seance.movie_id}
                          className="movies-title link"
                        >
                          {seance.movie_name ? seance.movie_name : " --- "}
                        </Link>
                      </div>
                      <div className="row-divider lang">
                        <div className="session-lang-tag">Рус</div>
                      </div>
                      <div className="row-divider price">
                        {seance.price_adult ? seance.price_adult : " --- "}
                      </div>
                      <div className="row-divider price">
                        {seance.price_kid ? seance.price_kid : " --- "}
                      </div>
                      <div className="row-divider price">
                        {seance.price_student ? seance.price_student : " --- "}
                      </div>
                      <div className="row-divider price">
                        {seance.price_vip ? seance.price_vip : " --- "}
                      </div>
                      <div className="action">
                        <button
                          className="btn active-secondary primary-dark"
                          type="button"
                          style={{ width: "145px" }}
                          onClick={handleShow}
                        >
                          Купить билет
                        </button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Выберите места</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Seats></Seats>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Закрыть
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Купить билеты
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default CinemaSchedule;
