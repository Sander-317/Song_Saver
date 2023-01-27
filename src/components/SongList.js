import React from "react";
// import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function SongList({ songs, removeSong }) {
  // const [removeInput, setRemoveInput] = useState("");
  // removeSong(removeInput);

  function onButtonPress(e) {
    // console.log(` on button pres ${e.target.value}`);
    console.log("onbuttonpress", e);
    removeSong(e);
  }

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item"> </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.song}</td>
                <td>{item.artist}</td>
                <td>{item.genre}</td>
                <td>{item.rating}</td>
                <td>
                  {/* <button value={item.id} onClick={() => onButtonPress(item)}>
                    remove
                  </button> */}
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    value={item.id}
                    onClick={() => onButtonPress(item)}
                    // onClick={() => setRemoveInput(item.id)}
                    // onClick={() => console.log("remove", item.id)}
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
