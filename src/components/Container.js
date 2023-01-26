import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import InputForm from "./InputForm";
import SongList from "./SongList";
import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      home: true,

      songs: [
        { id: 1, song: "Asong", artist: "Atester", gerne: "punk", rating: 5 },
        { id: 1, song: "Asong", artist: "Atester", gerne: "disco", rating: 2 },
        { id: 2, song: "Bsong", artist: "Btester", gerne: "rock", rating: 1 },
        { id: 3, song: "Csong", artist: "Ctester", gerne: "punk", rating: 4 },
        { id: 4, song: "Dsong", artist: "Dtester", gerne: "rock", rating: 3 },
      ],
    };
    this.toggleHome = this.toggleHome.bind(this);
  }

  toggleHome() {
    console.log("toggle home");
    this.setState({ home: !this.state.home });
  }

  render() {
    return (
      <div>
        {this.state.home ? (
          <div>
            <Header toggleHome={this.toggleHome} home={this.state.home} />
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
        ) : (
          <div>
            {" "}
            <Header toggleHome={this.toggleHome} home={this.state.home} />
            <About />{" "}
          </div>
        )}
      </div>
    );
  }
}
