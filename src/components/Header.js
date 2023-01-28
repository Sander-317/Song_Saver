import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header({ toggleHome, home, toggleSettings }) {
  if (home === true)
    return (
      <div>
        <h1>Song Saver</h1>
        <br />
        <button onClick={toggleSettings}>settings</button>
        {/* <button onClick={toggleHome}>about</button> */}
        <br></br>
        {/* <FontAwesomeIcon icon={faGear} onClick={toggleSettings} /> */}
      </div>
    );
  else {
    return (
      <div>
        <h1>Son Saver</h1>
        <br />
        <button onClick={toggleHome}>home</button>
        <br></br>
        {/* <FontAwesomeIcon icon={faGear} onClick={toggleSettings} /> */}
      </div>
    );
  }
}
