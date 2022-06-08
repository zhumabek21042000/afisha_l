import React, { Component } from "react";
import "./style.css";
const cities = ["Алматы", "Талдыкорган", "Уральск", "Астана"];

export default class EventCity extends Component {
  container = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      city: props.city ? props.city : "Алматы",
      open: false,
    };
    this.changeCity = this.changeCity.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleButtonClick() {
    this.setState({
      open: !this.state.open,
    });
  }
  changeCity = (city) => {
    this.setState({
      city: city,
      open: !this.state.open,
    });
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="left-bar">
          <div className="event-city" ref={this.container}>
            События в <span className="city">{this.state.city}</span>
            <button className="button" onClick={this.handleButtonClick}>
              <i
                className={
                  this.state.open ? "fas fa-angle-up" : "fas fa-angle-down"
                }
              ></i>
            </button>
          </div>
          {this.state.open && (
            <div className="dropdown" ref={this.container}>
              <ul>
                {cities.map((city) => {
                  return (
                    <li key={city} onClick={() => this.changeCity(city)}>
                      {city}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="right-bar">
          <a href="#" className="nav-link">
            <i className="fas fa-info-circle"></i>Покупка и возврат билетов
          </a>
          <a href="#" className="nav-link">
            <i className="fas fa-head-side-mask"></i>COVID-19{" "}
          </a>
        </div>
      </div>
    );
  }
}
