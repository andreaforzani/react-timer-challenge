import React, { useRef, useState } from "react";

const Player = () => {
  const playerName = useRef<HTMLInputElement>(null);

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current?.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Player"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
