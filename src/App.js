import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Serv from "./Components/Serv/Serv";
import Faq from "./Components/Faq/Faq";
import Contact from "./Components/Contact/Contact";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main />
        <About />
        <Serv />
        <Faq />
        <Contact />
        <Footer />
      </>
    );
  }
}
