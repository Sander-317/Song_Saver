import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

export default function Header({ home, toggleState }) {
  return (
    <div>
      <h1>
        <FontAwesomeIcon
          className="music-note"
          icon={faMusic}
          flip="horizontal"
        />
        Song Saver
        <FontAwesomeIcon className="music-note" icon={faMusic} />
      </h1>
      <br />
      <button onClick={(e) => toggleState("home")}>
        {home ? "About" : "Home"}
      </button>
      <button onClick={(e) => toggleState("addGenre")}>Add genre</button>
      <br></br>
      <br></br>
    </div>
  );
}
