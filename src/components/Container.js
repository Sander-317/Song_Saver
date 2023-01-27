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
      id: 5,

      songs: [
        { id: 1, song: "Asong", artist: "Atester", genre: "punk", rating: 5 },
        { id: 2, song: "Esong", artist: "Etester", genre: "disco", rating: 2 },
        { id: 3, song: "Bsong", artist: "Btester", genre: "rock", rating: 1 },
        { id: 4, song: "Csong", artist: "Ctester", genre: "punk", rating: 4 },
        { id: 5, song: "Dsong", artist: "Dtester", genre: "rock", rating: 3 },
      ],
    };
    this.toggleHome = this.toggleHome.bind(this);
  }

  toggleHome() {
    console.log("toggle home");
    this.setState({ home: !this.state.home });
  }

  removeSongFromList(e) {
    console.log("state", e);
    this.setState({
      songs: this.state.songs.filter((id) => id !== e),
    });
  }

  addSongToList = (song, artist, genre, rating) => {
    console.log(
      `add to list song = ${song} artist = ${artist} genre = ${genre} rating = ${rating}`
    );
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: this.state.id + 1,
          song: song,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
    this.setState({ id: this.state.id + 1 });
  };

  render() {
    return (
      <div>
        {this.state.home ? (
          <div>
            <Header toggleHome={this.toggleHome} home={this.state.home} />
            <InputForm addSong={this.addSongToList} />

            <SongList
              songs={this.state.songs}
              removeSong={this.removeSongFromSongList}
            />

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
