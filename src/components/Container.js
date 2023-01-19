import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import InputForm from "./InputForm";
import SongList from "./SongList";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item">
              {" "}
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => console.log("yeeey")}
                className="trash"
              />
            </th>
          </tr>
        </table>
        <SongList />
        <Footer />
      </div>
    );
  }
}
