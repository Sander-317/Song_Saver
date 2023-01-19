import React from "react";

export default function InputForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="song" />
        <input type="text" placeholder="artist" />
        <select name="gerne">
          <option value="rock">rock</option>
          <option value="punk">punk</option>
          <option value="disco">disco</option>
        </select>
        <button>add song</button>
      </form>
    </div>
  );
}
