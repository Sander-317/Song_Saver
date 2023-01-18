import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import InputForm from "./InputForm";
import SongList from "./SongList";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default class Container extends Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          Container
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <About />
        <Header />
        <InputForm />
        <SongList />
        <Footer />
      </div>
    );
  }
}
