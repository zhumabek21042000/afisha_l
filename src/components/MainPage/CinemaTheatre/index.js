import PropTypes from "prop-types";
import React, { Component } from "react";
import "./style.css";

export default class CinemaTheatre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type ? "Cinema" : "Theatre",
      clickedCinema: true,
      clikedTheatre: false,
    };
  }

  render() {
    return (
      <div className="event-type mb-5">
        <a
          className={
            this.state.clickedCinema ? "event-link active" : "event-link"
          }
          onClick={() =>
            this.setState({ clickedCinema: true, clickedTheatre: false })
          }
        >
          Кино
        </a>
        <a
          className={
            this.state.clickedTheatre ? "event-link active" : "event-link"
          }
          onClick={() =>
            this.setState({ clickedCinema: false, clickedTheatre: true })
          }
        >
          Театры
        </a>
      </div>
    );
  }
}
