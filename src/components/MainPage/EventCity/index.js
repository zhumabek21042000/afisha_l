import React, { Component } from "react";
import "./style.css";
import styled from "styled-components";
import AfishaService from "../../../services/axios";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #000000;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default class EventCity extends Component {
  container = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      city: props.city ? props.city : "Алматы",
      cities: [],
      open: false,
    };
    this.changeCity = this.changeCity.bind(this);
    this.toggling = this.toggling.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  toggling() {
    this.setState({ open: !this.state.open });
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
  handleValueChange = (event) => {
    this.setState({ city: event.target.value });
    // const [id, name] = JSON.parse(event.target.value);
    localStorage.setItem("city_name", event.target.value);
    localStorage.setItem("city_id", 3);
  };
  componentDidMount() {
    AfishaService.get_all_cities().then((res) => {
      this.setState({ cities: res.data.data });
    }, []);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="left-bar">
          <div className="event-city" ref={this.container}>
            События в<span className="city" style={{ fontSize: "21px" }}></span>
            <select
              className="dropdown-cities"
              value={
                localStorage.getItem("city_name")
                  ? localStorage.getItem("city_name")
                  : this.state.cities[0].name
              }
              onChange={this.handleValueChange}
            >
              {this.state.cities &&
                this.state.cities.map((city_arr) => (
                  <option
                    key={city_arr.id}
                    name={city_arr.id}
                    value={city_arr.name}
                    onClick={() => localStorage.setItem("city_id", city_arr.id)}
                    // value={JSON.stringify([city_arr.id, city_arr.name])}
                  >
                    {city_arr.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="right-bar">
          <a href="#" className="nav-link">
            <i className="fas fa-info-circle"></i>Покупка и возврат билетов
          </a>
        </div>
      </div>
    );
  }
}
