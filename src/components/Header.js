import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  home,

  toggleState,
}) {
  if (home === true)
    return (
      <div>
        <h1>Song Saver</h1>
        <br />

        <button
          id="home"
          value="home"
          onClick={(e) => toggleState(e.target.value)}
        >
          about
        </button>

        <button
          id="settings"
          value="settings"
          onClick={(e) => toggleState(e.target.value)}
        >
          settings
        </button>
        <FontAwesomeIcon
          icon={faGear}
          onClick={() => toggleState("settings")}
        />
      </div>
    );
  else {
    return (
      <div>
        <h1>Son Saver</h1>
        <br />
        <button
          id="home"
          value="home"
          onClick={(e) => toggleState(e.target.value)}
        >
          home
        </button>
        <br></br>
        {/* <FontAwesomeIcon icon={faGear} onClick={toggleSettings} /> */}
      </div>
    );
  }
}
