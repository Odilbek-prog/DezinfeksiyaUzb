import React, { Component } from "react";
import "./Contact.css";
import person from "../../img/contact.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
    };
  }

  handleValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const token = `7326511785:AAGQrqMF_DgNItofNe2kUItExRLR6Ykbnkg`;
    const chat_id = 6306759214;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: this.state,
      },
    })
      .then((data) => {
        alert("Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="contact" id="contact">
        <form data-aos="fade-right" onSubmit={this.handleSubmit}>
          <h2 className="contact_title">Оставьте свою информацию</h2>
          <input
            onChange={this.handleValue}
            value={this.state.name}
            name="name"
            type="text"
            placeholder="ваше имя"
            className="inp"
            required
          />
          <input
            onChange={this.handleValue}
            value={this.state.number}
            name="number"
            type="text"
            placeholder="+998-xx-xxx-xx-xx"
            className="inp"
            required
          />
          <button className="contact__button">Отправка</button>
        </form>
        <img src={person} alt="" />
      </div>
    );
  }
}
