import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}> 
      <span className="player">
        {editablePlayName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
