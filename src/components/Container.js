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
      addGenre: false,
      songId: 5,
      genreId: 4,

      songs: [
        { id: 1, song: "Asong", artist: "Atester", genre: "punk", rating: 5 },
        { id: 2, song: "Esong", artist: "Etester", genre: "disco", rating: 2 },
        { id: 3, song: "Bsong", artist: "Btester", genre: "rock", rating: 1 },
        { id: 4, song: "Csong", artist: "Ctester", genre: "punk", rating: 4 },
        { id: 5, song: "Dsong", artist: "Dtester", genre: "rock", rating: 3 },
      ],
      genres: [
        { id: 1, genre: "punk" },
        { id: 2, genre: "rock" },
        { id: 3, genre: "disco" },
      ],
    };

    this.toggleState = this.toggleState.bind(this);
    this.removeSongFromList = this.removeSongFromList.bind(this);
    this.sortList = this.sortList.bind(this);
  }

  toggleState(e) {
    switch (e) {
      case "home":
        this.setState({ home: !this.state.home });
        break;
      case "addGenre":
        this.setState({ addGenre: !this.state.settings });
        break;
      default:
        console.log(e);
    }
  }

  removeSongFromList(e) {
    this.setState({
      songs: this.state.songs.filter((id) => id !== e),
    });
  }

  addSongToList = (song, artist, genre, rating) => {
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: this.state.songId + 1,
          song: song,
          artist: artist,
          genre: genre,
          rating: rating,
        },
      ],
    });
    this.setState({ songId: this.state.songId + 1 });
  };

  sortList(e) {
    function sort(property) {
      let sortOrder = 1;
      if (property[0] === "-") {
        sortOrder = -1;
      }
      return function (a, b) {
        let result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    }

    switch (e) {
      case "sortSongAZ":
        this.setState({ songs: this.state.songs.sort(sort("song")) });
        break;
      case "sortSongZA":
        this.setState({
          songs: this.state.songs.sort(sort("song")).reverse(),
        });
        break;
      case "sortArtistAZ":
        this.setState({ songs: this.state.songs.sort(sort("artist")) });
        break;
      case "sortArtistZA":
        this.setState({
          songs: this.state.songs.sort(sort("artist")).reverse(),
        });
        break;
      case "sortGenreAZ":
        this.setState({ songs: this.state.songs.sort(sort("genre")) });
        break;
      case "sortGenreZA":
        this.setState({
          songs: this.state.songs.sort(sort("genre")).reverse(),
        });
        break;
      case "sortRating09":
        this.setState({ songs: this.state.songs.sort(sort("rating")) });
        break;
      case "sortRating90":
        this.setState({
          songs: this.state.songs.sort(sort("rating")).reverse(),
        });
        break;
      default:
        this.setState({ songs: this.state.songs.sort(sort("id")) });
    }
  }

  render() {
    return (
      <div>
        {this.state.addGenre ? console.log("addGenre work") : ""}

        {this.state.home ? (
          <div>
            <Header home={this.state.home} toggleState={this.toggleState} />
            <InputForm
              addSong={this.addSongToList}
              genres={this.state.genres}
            />

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
            <Header toggleState={this.toggleState} home={this.state.home} />
            <About />{" "}
          </div>
        )}
      </div>
    );
  }
}
