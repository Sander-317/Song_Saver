import React from "react";

export default function InputForm() {
  return (
    <div>
      <form className="input-form">
        <input type="text" placeholder="song" />
        <input type="text" placeholder="artist" />
        <select name="gerne">
          <option value="">gerne</option>
          <option value="rock">rock</option>
          <option value="punk">punk</option>
          <option value="disco">disco</option>
        </select>
        <select name="rating">
          <option value="">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>add song</button>
      </form>
    </div>
  );
}
