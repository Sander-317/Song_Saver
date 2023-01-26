import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function SongList({ songs }) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
          <th className="song-row__item"> </th>
        </tr>
        {songs.map((item) => {
          return (
            <tr>
              <td>{item.song}</td>
              <td>{item.artist}</td>
              <td>{item.genre}</td>
              <td>{item.rating}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => console.log("yeeey")}
                  className="trash"
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
