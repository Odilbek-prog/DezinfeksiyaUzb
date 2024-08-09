import React, { Component } from "react";
import "./Footer.css";
import logo from "../../img/logo.png";
import location from "../../img/location.webp";
import arrow from "../../img/arrow-up-right.svg";
import phone from "../../img/phone.png";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <hr />
        <div className="logos">
          <img src={logo} alt="" className="navbarimg" />
          <div className="locphone">
            <div className="location" data-aos="fade-right">
              <a className="linkf" href="https://maps.google.com/">
                <img src={location} alt="" className="locationicon" />
                <p className="location_title">Узбекистан, город Ташкент</p>
                <img src={arrow} alt="" className="arrow" />
              </a>
            </div>
            <div className="phone" data-aos="fade-right">
              <a href="tel:+991999933" className="linkf">
                <img src={phone} alt="" className="phoneicon" />
                <p className="phone_title">+998 99 119 99 33</p>
                <img src={arrow} alt="" className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
