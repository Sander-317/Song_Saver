import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AddGenre({
  toggleState,
  genres,
  addGenreToList,
  removeGenreFromList,
  sortList,
}) {
  const [inputGenre, setInputGenre] = useState("");

  function onButtonPress(e) {
    e.preventDefault();
    if (inputGenre.length > 0) {
      console.log(inputGenre);
      addGenreToList(inputGenre);
      setInputGenre("");
    }
  }
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-content">
            <form>
              <input
                type="text"
                placeholder="genre"
                value={inputGenre}
                onChange={(e) => setInputGenre(e.target.value)}
              ></input>
              <button onClick={onButtonPress}>add genre</button>
            </form>
            <button
              className="close-modal"
              onClick={() => toggleState("addGenre")}
            >
              X
            </button>
            <table>
              <thead>
                <tr>
                  <th>genre</th>
                  <th>
                    <select
                      name="sort"
                      onChange={(e) => sortList(e.target.value)}
                    >
                      sort
                      <option value="defaultGenre">sort</option>
                      <option value="genreAZ">genreA-Z</option>
                      <option value="genreZA">genreZ-A</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {genres.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.genre}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          value={item.id}
                          onClick={() => removeGenreFromList(item)}
                          className="trash"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
