import React from "react";
import { useState } from "react-router-dom";
import "./style.css";

function CinemaTable() {
  return (
    <div className="cinema-schedule">
      <div className="cinema-schedule-head">
        <div className="container">
          <div style={{ width: "10%" }}>Время</div>
          <div style={{ width: "20%" }}>Кинотеатр</div>
          <div style={{ width: "10%" }}>Язык</div>
          <div style={{ width: "10%" }}>Взрослый</div>
          <div style={{ width: "10%" }}>Время</div>
          <div style={{ width: "10%" }}>Детский</div>
          <div style={{ width: "10%" }}>Студент</div>
          <div style={{ width: "15%" }}>VIP</div>
        </div>
      </div>
    </div>
  );
}

export default CinemaTable;
