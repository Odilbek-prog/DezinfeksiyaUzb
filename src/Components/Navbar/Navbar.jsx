import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="space">
          <a className="navbar-brand" href="#main">
            <img className="navbarimg" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#main">
                  Основной
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  О нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#serv">
                  Услуги
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  ФАҚ
                </a>
              </li>
            </ul>
            <select name="" id="select">
              <option value="1">Русский</option>
              <option value="2">Ўзбекча</option>
            </select>
            <a href="#contact" className="shiny">
              Связь
              <i></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
