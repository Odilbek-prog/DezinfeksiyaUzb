import React, { Component } from "react";
import "./Contact.css";
import person from "../../img/contact.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <form data-aos="fade-right">
          <h2 className="contact_title">Оставьте свою информацию</h2>
          <input type="text" placeholder="ваше имя" className="inp" />
          <input type="text" placeholder="+998909175023" className="inp" />
          <button className="contact__button">Отправка</button>
        </form>
        <img src={person} alt="" />
      </div>
    );
  }
}
