import React from "react";
import { useState } from "react";

export default function InputForm({ addSong }) {
  const [inputSong, setInputSong] = useState("");
  const [inputArtist, setInputArtist] = useState("");
  const [inputGenre, setInputGenre] = useState("");
  const [inputRating, setInputRating] = useState("");

  function onButtonPress(e) {
    e.preventDefault();
    if (inputSong.length > 0 && inputArtist.length > 0 && inputGenre !== "") {
      addSong(inputSong, inputArtist, inputGenre, inputRating);
      setInputSong("");
      setInputArtist("");
    } else {
      alert("Please enter all info");
    }
  }

  return (
    <div>
      <form className="input-form">
        <input
          type="text"
          placeholder="song"
          value={inputSong}
          onChange={(e) => setInputSong(e.target.value)}
        />
        <input
          type="text"
          placeholder="artist"
          value={inputArtist}
          onChange={(e) => setInputArtist(e.target.value)}
        />
        <select
          name="gerne"
          value={inputGenre}
          onChange={(e) => setInputGenre(e.target.value)}
        >
          <option value="">genre</option>
          <option value="rock">rock</option>
          <option value="punk">punk</option>
          <option value="disco">disco</option>
        </select>
        <select
          name="rating"
          value={inputRating}
          onChange={(e) => setInputRating(e.target.value)}
        >
          <option value="0">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={onButtonPress}>add song</button>
      </form>
    </div>
  );
}
