import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  home,

  toggleState,
}) {
  return (
    <div>
      <h1>Song Saver</h1>
      <br />

      <button onClick={(e) => toggleState("home")}>
        {home ? "About" : "Home"}
      </button>

      <button onClick={(e) => toggleState("addGenre")}>addGenre</button>
      <FontAwesomeIcon icon={faGear} onClick={() => toggleState("addGenre")} />
    </div>
  );
}
