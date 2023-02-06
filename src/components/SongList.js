import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SongList({ songs, removeSong, sortList }) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item">
              {" "}
              <select name="sort" onChange={(e) => sortList(e.target.value)}>
                <option value="default">sort</option>
                <option value="sortSongAZ">songA-Z</option>
                <option value="sortSongZA">songZ-A</option>
                <option value="sortArtistAZ">artistA-Z</option>
                <option value="sortArtistZA">artistZ-A</option>
                <option value="sortGenreAZ">genreA-Z</option>
                <option value="sortGenreZA">genreZ-A</option>
                <option value="sortRatingAZ">rating0-9</option>
                <option value="sortRatingZA">rating9-0</option>
              </select>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.song}</td>
                <td>{item.artist}</td>
                <td>{item.genre}</td>
                <td>
                  {/* FIXME: Try to find a way to get the icon a unique id i have no clue how i have tried many ways please help*/}
                  {[...Array(item.rating)].map((_, index) => {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        className="star"
                        icon={faStar}
                      />
                    );
                  })}
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    value={item.id}
                    onClick={() => removeSong(item)}
                    className="trash"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
