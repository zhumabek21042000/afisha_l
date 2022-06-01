import React from "react";
import "./style.css";
import CinemaTabs from "../CinemaTabs/CinemaTabs";
import CinemaFilter from "../CinemaFilter/CinemaFilter";
import CinemaSchedule from "../CinemaHallSchedule/CinemaSchedule";

const CinemaDetails = (props) => {
  return (
    <>
      <div className="about-movie container mt-32">
        <div className="about-partner-top">
          <div className="about-partner-group">
            <div className="about-partner-poster">
              <div
                className="poster-image"
                style={{
                  backgroundImage:
                    "url('https://cdn.kino.kz/cinema/119/p1000x1000.jpg')",
                }}
              ></div>
            </div>
          </div>
          <div className="about-partner-data">
            <div className="about-partner-title">
              Cinemax (Dostyk Plaza) Dolby Atmos
            </div>
            <div className="d-flex align-center mb-24">
              <div className="about-partner-icon">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6666 12.5758C22.6666 21.0606 11.9999 28.3334 11.9999 28.3334C11.9999 28.3334 1.33325 21.0606 1.33325 12.5758C1.33325 9.68251 2.45706 6.90774 4.45745 4.86189C6.45783 2.81603 9.17094 1.66669 11.9999 1.66669C14.8289 1.66669 17.542 2.81603 19.5424 4.86189C21.5428 6.90774 22.6666 9.68251 22.6666 12.5758Z"
                    stroke="#FD6500"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 16.3334C14.2091 16.3334 16 14.5425 16 12.3334C16 10.1242 14.2091 8.33337 12 8.33337C9.79086 8.33337 8 10.1242 8 12.3334C8 14.5425 9.79086 16.3334 12 16.3334Z"
                    stroke="#FD6500"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="about-movie-btn-caption">
                  г. Алматы, Самал-2, д. 111, уг.ул. Жолдасбекова, ТРЦ «Достык
                  Плаза», +7 (727) 222 00 77, +7 701 026 73 69 (администрация),
                  бронирование билетов не предусмотрено
                </div>
              </div>
            </div>
            <div className="d-flex align-center mt-24">
              <div className="about-partner-icon">
                <svg
                  width="21"
                  height="28"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-width="2"
                    stroke="#FF005D"
                    d="M1.5103 19.9218L1.47767 19.9485L1.47515 19.951C1.39652 19.9978 1.28096 20.0171 1.1395 19.9598C1.0598 19.9193 0.999908 19.8245 0.999908 19.7319V2.02899C0.999908 1.49372 1.46455 1 2.09141 1H13.9084C14.5353 1 14.9999 1.49372 14.9999 2.02899V19.7065C14.9999 19.8021 14.9361 19.9 14.8526 19.9381L14.8171 19.9543L14.783 19.9732C14.7698 19.9806 14.7511 19.9883 14.7298 19.9938C14.7197 19.9964 14.7108 19.9981 14.7036 19.999C14.7011 19.9994 14.699 19.9996 14.6973 19.9997C14.6942 20 14.6927 20 14.6927 20C14.6457 20 14.5825 19.9846 14.5199 19.9467L14.4895 19.9218L8.63331 15.1283L7.99991 14.6099L7.36651 15.1283L1.5103 19.9218Z"
                  ></path>
                </svg>
              </div>
              <div
                className="about-movie-btn-caption"
                style={{ width: "56px" }}
              >
                Хочу посетить
              </div>
            </div>
          </div>
        </div>
        <div className="tabs mt-32">
          <CinemaTabs></CinemaTabs>
        </div>
        <div className="divider mt-24"></div>
      </div>
      <div className="container">
        <div className="about-movie-filters">
          <CinemaFilter></CinemaFilter>
        </div>
      </div>
      <CinemaSchedule></CinemaSchedule>
    </>
  );
};

export default CinemaDetails;
