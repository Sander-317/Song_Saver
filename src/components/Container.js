import React, { Component } from "react";
import About from "./About";
import Header from "./Header";
import InputForm from "./InputForm";
import SongList from "./SongList";
import Footer from "./Footer";
import AddGenre from "./modal/AddGenre";
import songs from "./songs";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      addGenre: false,
      songId: 5,
      genreId: 4,
      songs: songs,

      genres: [
        { id: 1, genre: "punk" },
        { id: 2, genre: "rock" },
        { id: 3, genre: "disco" },
      ],
    };

    this.toggleState = this.toggleState.bind(this);
    this.removeSongFromList = this.removeSongFromList.bind(this);
    this.sortList = this.sortList.bind(this);
    this.removeGenreFromList = this.removeGenreFromList.bind(this);
    this.addGenreToList = this.addGenreToList.bind(this);
  }

  toggleState(e) {
    switch (e) {
      case "home":
        this.setState({ home: !this.state.home });
        break;
      case "addGenre":
        this.setState({ addGenre: !this.state.addGenre });
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

  removeGenreFromList(e) {
    this.setState({
      genres: this.state.genres.filter((id) => id !== e),
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
          rating: +rating,
        },
      ],
    });
    this.setState({ songId: this.state.songId + 1 });
  };

  addGenreToList = (genre) => {
    this.setState({
      genres: [
        ...this.state.genres,
        { id: this.state.genreId + 1, genre: genre },
      ],
    });
    this.setState({ genreId: this.state.genreId + 1 });
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
      case "sortRatingAZ":
        console.log("rating 09");
        this.setState({ songs: this.state.songs.sort(sort("rating")) });
        break;
      case "sortRatingZA":
        console.log("rating 90");
        this.setState({
          songs: this.state.songs.sort(sort("rating")).reverse(),
        });
        break;
      case "genreAZ":
        this.setState({ genres: this.state.genres.sort(sort("genre")) });
        break;
      case "genreZA":
        this.setState({
          genres: this.state.genres.sort(sort("genre")).reverse(),
        });
        break;
      case "defaultGenre":
        this.setState({ genres: this.state.genres.sort(sort("id")) });
        break;
      default:
        this.setState({ songs: this.state.songs.sort(sort("id")) });
    }
  }

  render() {
    return (
      <div>
        <Header home={this.state.home} toggleState={this.toggleState} />

        {this.state.addGenre ? (
          <AddGenre
            toggleState={this.toggleState}
            genres={this.state.genres}
            removeGenreFromList={this.removeGenreFromList}
            addGenreToList={this.addGenreToList}
            sortList={this.sortList}
          />
        ) : (
          ""
        )}
        {this.state.home ? (
          <div>
            <InputForm
              addSong={this.addSongToList}
              genres={this.state.genres}
            />

            <SongList
              songs={this.state.songs}
              removeSong={this.removeSongFromList}
              sortList={this.sortList}
            />

            <Footer songs={this.state.songs} />
          </div>
        ) : (
          <div>
            {" "}
            <About />{" "}
          </div>
        )}
      </div>
    );
  }
}
