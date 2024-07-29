import React, { Component } from "react";
import "./Main.css";
import first from "../../img/first.png";
import second from "../../img/second.png";
import third from "../../img/third.png";
import hero from "../../img/herooo.jpeg";

export default class Main extends Component {
  render() {
    return (
      <div className="main" id="main">
        <div className="main_right">
          <h1 className="right_title" data-aos="fade-right">
            Служба дезинфекции
          </h1>
          <p className="right_text" data-aos="fade-right">
            Мы проводим профессиональную дезинфекцию в Ташкенте 10 лет, поэтому
            знаем, как избавить вас от вредителей с 1-го раза.
          </p>
          <a href="#contact" className="shiny mainbtn" data-aos="fade-right">
            Связь
            <i></i>
          </a>
          <img className="first justimg" src={first} alt="" />
          <img className="second justimg" src={second} alt="" />
          <img className="third justimg" src={third} alt="" />
        </div>
        <div className="main-left">
          <img src={hero} alt="" />
        </div>
      </div>
    );
  }
}
