import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./style.css"

export default class CinemaTheatre extends Component {
  constructor(props) {
      super(props);
      this.state = {
          type: props.type ? "Cinema" : "Theatre"
      }
  }

  render() {
    return (
      <div className="event-type">
        <a className="event-link active">Кино</a>
        <a className="event-link">Театры</a>
      </div>
    )
  }
}
