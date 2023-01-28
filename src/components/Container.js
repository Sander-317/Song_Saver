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
      displaySongs: [],
    };
    this.toggleHome = this.toggleHome.bind(this);
    this.removeSongFromList = this.removeSongFromList.bind(this);
    this.sortList = this.sortList.bind(this);
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

  sortList(e) {
    function sort(property) {
      let sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        let result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    }
    // console.log(`sort list ${e}`);
    switch (e) {
      case "sortSongAZ":
        console.log(`switch sortSongAZ = ${e}`);
        this.setState({ songs: this.state.songs.sort(sort("song")) });
        // console.log(`after sort displaySongs = ${this.state.displaySongs}`);
        break;
      case "sortSongZA":
        console.log(`switch sortSongZA = ${e}`);
        this.setState({
          songs: this.state.songs.sort(sort("song")).reverse(),
        });
        break;
      case "sortArtistAZ":
        console.log(`switch sortArtistAZ = ${e}`);
        this.setState({ songs: this.state.songs.sort(sort("artist")) });
        // console.log(`after sort displaySongs = ${this.state.displaySongs}`);
        break;
      case "sortArtistZA":
        console.log(`switch sortArtistZA = ${e}`);
        this.setState({
          songs: this.state.songs.sort(sort("artist")).reverse(),
        });
        break;
      case "sortGenreAZ":
        console.log(`switch sortGenreAZ = ${e}`);
        this.setState({ songs: this.state.songs.sort(sort("genre")) });
        // console.log(`after sort displaySongs = ${this.state.displaySongs}`);
        break;
      case "sortGenreZA":
        console.log(`switch sortGenreZA = ${e}`);
        this.setState({
          songs: this.state.songs.sort(sort("genre")).reverse(),
        });
        break;
      case "sortRatingAZ":
        console.log(`switch sortRatingAZ = ${e}`);
        this.setState({ songs: this.state.songs.sort(sort("rating")) });
        // console.log(`after sort displaySongs = ${this.state.displaySongs}`);
        break;
      case "sortRatingZA":
        console.log(`switch sortRatingZA = ${e}`);
        this.setState({
          songs: this.state.songs.sort(sort("rating")).reverse(),
        });
        break;
      default:
        console.log("switch default");
    }
  }

  render() {
    return (
      <div>
        {this.state.home ? (
          <div>
            <Header toggleHome={this.toggleHome} home={this.state.home} />
            <InputForm addSong={this.addSongToList} />

            <SongList
              songs={this.state.songs}
              removeSong={this.removeSongFromList}
              sortList={this.sortList}
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
