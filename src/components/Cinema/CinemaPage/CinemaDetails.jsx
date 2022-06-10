import React, { useEffect, useState } from "react";
import "./style.css";
import CinemaTabs from "../CinemaTabs/CinemaTabs";
import CinemaFilter from "../CinemaFilter/CinemaFilter";
import CinemaSchedule from "../CinemaHallSchedule/CinemaSchedule";
import { useParams } from "react-router-dom";
import AfishaService from "../../../services/axios";

const CinemaDetails = (props) => {
  const params = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    AfishaService.getCinemaById(params.id).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setAddress(res.data.address);
      setDescription(res.data.description);
    }, []);
  });
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
            <div className="about-partner-title">{name}</div>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 16.3334C14.2091 16.3334 16 14.5425 16 12.3334C16 10.1242 14.2091 8.33337 12 8.33337C9.79086 8.33337 8 10.1242 8 12.3334C8 14.5425 9.79086 16.3334 12 16.3334Z"
                    stroke="#FD6500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="about-movie-btn-caption">{address}</div>
              </div>
            </div>
            <div className="d-flex align-center mt-24"></div>
          </div>
        </div>
        <div className="tabs mt-32">
          <CinemaTabs description={description}></CinemaTabs>
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
