import React from "react";
import { useState } from "react";

export default function InputForm() {
  const [inputSong, setInputSong] = useState("");
  const [inputArtist, setInputArtist] = useState("");
  const [inputGerne, setInputGerne] = useState("");
  const [inputRating, setInputRating] = useState("");

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
          value={inputGerne}
          onChange={(e) => setInputGerne(e.target.value)}
        >
          <option value="">gerne</option>
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
        <button
          onClick={() =>
            console.log(
              `the song = ${inputSong} the artist = ${inputArtist} the gerne = ${inputGerne} the rating = ${inputRating}`
            )
          }
        >
          add song
        </button>
      </form>
    </div>
  );
}
