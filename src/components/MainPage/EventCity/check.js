import React, { Component } from 'react'
import "./style.css"

const cities = ["Алматы", "Талдыкорган", "Уральск", "Астана"]
export default class EventCity extends Component {
    container = React.createRef();
    constructor(props) {
        super(props)
        this.state = {
            city: props.city? props.city : localStorage.getItem('cityUser')? localStorage.getItem('cityUser') : "Алматы",
            openDropdown: "dropdown",
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClickCity = this.handleClickCity.bind(this);
    }

    handleButtonClick() {
      let value = "dropdown open"
      if(this.state.openDropdown === "dropdown open"){
        value="dropdown"
        }
        this.setState({
          openDropdown: value
        })
      };

    handleClickOutside = (event) => {
    if (
        this.container.current &&
        !this.container.current.contains(event.target)
    ) {
        this.setState({
        openDropdown: "dropdown",
        });
    }
    };

    handleClickCity = (event) =>{
      localStorage.setItem('cityUser', event.target.value);
      this.setState({
        city: event.target.value
      });
    }

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
              <i className={this.state.openDropdown === "dropdown open" ? "fas fa-angle-up":"fas fa-angle-down"}></i>
              </button>
        </div>
           
        
          
          <div className={this.state.openDropdown}>
              <ul>
              {cities.map(function(city){
                return <li onClick={()=>alert(city)} value={city}>{city}</li>
              })}
              </ul>
          </div>
          <h1>{this.state.openDropdown}</h1>
        
      
      </div>

      <div className="right-bar">

      </div>
      </div>
    )
  }
}
