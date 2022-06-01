import React from "react";
import "./style.css";

function CinemaSchedule() {
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
          <div className="title">Зал 1</div>
          <div className="cinemas-schedule-line">
            <div>
              <div className="cinemas-schedule-row">
                <div className="seance">
                  <div className="schedule-time">
                    <div>11:30</div>
                  </div>
                </div>
                <div className="row-divider movie">
                  <a href="/movie/9594" className="movies-title link">
                    Фантастические твари: Тайны Дамблдора
                  </a>
                </div>
                <div className="row-divider lang">
                  <div className="session-lang-tag">рус</div>
                </div>
                <div className="row-divider price">2 200 ₸</div>
                <div className="row-divider price">1 200 ₸</div>
                <div className="row-divider price">1 500 ₸</div>
                <div className="row-divider price">-</div>
                <div className="action">
                  <button
                    className="btn active-secondary primary-dark"
                    type="button"
                    style={{ width: "145px" }}
                  >
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="cinemas-schedule-row">
                <div className="seance">
                  <div className="schedule-time">
                    <div>14:15</div>
                  </div>
                </div>
                <div className="row-divider movie">
                  <a href="/movie/9594" className="movies-title link">
                    Фантастические твари: Тайны Дамблдора
                  </a>
                </div>
                <div className="row-divider lang">
                  <div className="session-lang-tag">рус</div>
                </div>
                <div className="row-divider price">2 500 ₸</div>
                <div className="row-divider price">1 400 ₸</div>
                <div className="row-divider price">1 700 ₸</div>
                <div className="row-divider price">-</div>
                <div className="action">
                  <button
                    className="btn active-secondary primary-dark"
                    type="button"
                    style={{ width: "145px" }}
                  >
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="cinemas-schedule-row">
                <div className="seance">
                  <div className="schedule-time">
                    <div>17:00</div>
                  </div>
                </div>
                <div className="row-divider movie">
                  <a href="/movie/9594" className="movies-title link">
                    Фантастические твари: Тайны Дамблдора
                  </a>
                </div>
                <div className="row-divider lang">
                  <div className="session-lang-tag">рус</div>
                </div>
                <div className="row-divider price">2 900 ₸</div>
                <div className="row-divider price">1 600 ₸</div>
                <div className="row-divider price">1 900 ₸</div>
                <div className="row-divider price">-</div>
                <div className="action">
                  <button
                    className="btn active-secondary primary-dark"
                    type="button"
                    style={{ width: "145px" }}
                  >
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="cinemas-schedule-row">
                <div className="seance">
                  <div className="schedule-time">
                    <div>19:45</div>
                  </div>
                </div>
                <div className="row-divider movie">
                  <a href="/movie/9594" className="movies-title link">
                    Фантастические твари: Тайны Дамблдора
                  </a>
                </div>
                <div className="row-divider lang">
                  <div className="session-lang-tag">рус</div>
                </div>
                <div className="row-divider price">2 900 ₸</div>
                <div className="row-divider price">1 600 ₸</div>
                <div className="row-divider price">1 900 ₸</div>
                <div className="row-divider price">-</div>
                <div className="action">
                  <button
                    className="btn active-secondary primary-dark"
                    type="button"
                    style={{ width: "145px" }}
                  >
                    Купить билет
                  </button>
                </div>
              </div>
              <div className="cinemas-schedule-row">
                <div className="seance">
                  <div className="schedule-time">
                    <div>22:30</div>
                  </div>
                </div>
                <div className="row-divider movie">
                  <a href="/movie/9594" className="movies-title link">
                    Фантастические твари: Тайны Дамблдора
                  </a>
                </div>
                <div className="row-divider lang">
                  <div className="session-lang-tag">рус</div>
                </div>
                <div className="row-divider price">2 900 ₸</div>
                <div className="row-divider price">1 600 ₸</div>
                <div className="row-divider price">1 900 ₸</div>
                <div className="row-divider price">-</div>
                <div className="action">
                  <button
                    className="btn active-secondary primary-dark"
                    type="button"
                    style={{ width: "145px" }}
                  >
                    Купить билет
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CinemaSchedule;
