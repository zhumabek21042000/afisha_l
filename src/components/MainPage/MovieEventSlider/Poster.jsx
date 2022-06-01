import React from "react";
import "./poster.css";
function Poster(props) {
  return (
    <a className="poster" href="#">
      <div
        className="poster-image"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="rate green">
          <svg
            width="8"
            height="8"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.12231 11.0146L3.19504 16.4146C3.15322 16.6608 3.25508 16.9114 3.45719 17.0584C3.65877 17.205 3.92877 17.2246 4.14982 17.1085L9.00006 14.5584L13.8503 17.1085C13.9459 17.1588 14.0508 17.1837 14.1557 17.1837C14.292 17.1837 14.4284 17.1413 14.5429 17.0584C14.7451 16.9114 14.8464 16.6608 14.8044 16.4146L13.8776 11.0143L17.8021 7.18995C17.9802 7.01536 18.0451 6.7534 17.9681 6.5159C17.8912 6.27824 17.6839 6.10346 17.4371 6.06808L12.0149 5.27967L9.59013 0.366353C9.47933 0.142268 9.24988 0 9.00006 0C8.75025 0 8.52044 0.142268 8.41001 0.366353L5.98541 5.28003L0.5628 6.06808C0.315844 6.10346 0.108898 6.27824 0.0320669 6.5159C-0.0451372 6.7534 0.0197336 7.01536 0.198615 7.18995L4.12231 11.0146Z"
              fill="white"
            ></path>
          </svg>
          {props.rate}
        </div>
      </div>
      <div className="poster-data">
        <div class="poster-title">{props.title}</div>
        <div class="poster-date">{props.date ? props.date : ""}</div>
        <span class="poster-subtitle"></span>
        <span>{props.genres}</span>
      </div>
    </a>
  );
}

export default Poster;
