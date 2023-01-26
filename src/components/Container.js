import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import InputForm from "./InputForm";
import SongList from "./SongList";
import Footer from "./Footer";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      home: true,

      songs: [
        { id: 1, song: "Asong", artist: "Atester", genre: "punk", rating: 5 },
        { id: 1, song: "Esong", artist: "Atester", genre: "disco", rating: 2 },
        { id: 2, song: "Bsong", artist: "Btester", genre: "rock", rating: 1 },
        { id: 3, song: "Csong", artist: "Ctester", genre: "punk", rating: 4 },
        { id: 4, song: "Dsong", artist: "Dtester", genre: "rock", rating: 3 },
      ],
    };
    this.toggleHome = this.toggleHome.bind(this);
  }

  toggleHome() {
    console.log("toggle home");
    this.setState({ home: !this.state.home });
  }

  // displayList() {
  //   this.state.songs.map((item) => {
  //     console.log(item);
  //     return item;
  //   });
  // }

  render() {
    return (
      <div>
        {this.state.home ? (
          <div>
            <Header toggleHome={this.toggleHome} home={this.state.home} />
            <InputForm />

            <SongList songs={this.state.songs} />

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
