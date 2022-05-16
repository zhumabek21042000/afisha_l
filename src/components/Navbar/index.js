import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/index";
import api from "../../services/endpoints/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./style.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState(
    localStorage.getItem("token") ? api.getUser() : ""
  );

  const handleClick = () => setClick(!click);
  const handleSearchClick = () => setSearchClick(!searchClick);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={process.env.PUBLIC_URL + "/logo2.png"} alt=""></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu justify-end"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/search"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                Поиск
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Новости
              </NavLink>
            </li>
            {user !== "" ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/profile"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeClassName="active"
                    className="nav-links"
                    onClick={() => localStorage.removeItem("token")}
                  >
                    Выйти
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Войти
                </NavLink>
              </li>
            )}
          </ul>

          <ul className={click ? "nav-menu-mobile active" : "nav-menu-mobile"}>
            <li className="nav-item" disabled={true}>
              {auth.isLoaded ? (
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Profile
                </NavLink>
              ) : (
                <>
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <i class="fas fa-user-circle"></i>
                    Войти
                  </NavLink>
                </>
              )}
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/rating"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i class="fas fa-star"></i>
                Рейтинг
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Все фильмы
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Поиск
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Новости
              </NavLink>
            </li>
          </ul>
          <div className="nav-mobile-header">
            <div className="nav-search" onClick={handleSearchClick}>
              <i
                class={searchClick ? "fas fa-times white " : "fas fa-search"}
              ></i>
            </div>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times white" : "fas fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
