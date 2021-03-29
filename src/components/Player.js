import React from "react";
import Counter from "./Counter";

export default function Player({ name, score, removePlayer }) {
  return (
    <div className="player">
      <button className="remove-player" onClick={() => removePlayer(name)}>
        x
      </button>
      <span className="player-name">{name}</span>

      <Counter score={score} />
    </div>
  );
}
