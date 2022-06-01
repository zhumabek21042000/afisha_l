import React from "react";
import { useState } from "react-router-dom";
import "./style.css";

function CinemaTableHead() {
  return (
    <div className="cinema-schedule halls">
      <div className="cinema-schedule-head">
        <div className="container">
          <div style={{ width: "10%" }}>Время</div>
          <div style={{ width: "20%" }}>Фильм</div>
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

export default CinemaTableHead;
