import React from "react";

export default function Header({ toggleHome, home }) {
  if (home === true)
    return (
      <div>
        <h1>Song Saver</h1>
        <br />
        <button onClick={toggleHome}>about</button>
      </div>
    );
  else {
    return (
      <div>
        <h1>Son Saver</h1>
        <br />
        <button onClick={toggleHome}>home</button>
      </div>
    );
  }
}
