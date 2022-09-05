import React, { useState } from "react";
import boardState from "../boardState";

const GridSquare = ({ coords }) => {
  const [clicked, setClicked] = useState(false);
  const [bombCount, setBombCount] = useState(0);
  const [foundBomb, setFoundBomb] = useState(false);

  const bombCountColors = [
    "#5b71a1", // 0
    "#e6c628", // 1
    "#ff8015", // 2
    "#8f6ed5", // 3
    "#b76ac4", // 4
    "#0ff2eb", // 5
    "#aab7c4", // 6
    "#ffa27b", // 7
    "#c23d4b", // 8
  ];

  const checkForBombs = () => {
    const x = coords.x;
    const y = coords.y;
    let localBombCount = 0;

    // Top Left
    if (x !== 0) {
      if (boardState[x - 1][y - 1] === "B") localBombCount++;
    }

    // Top Center
    if (x !== 0) {
      if (boardState[x - 1][y] === "B") localBombCount++;
    }

    // Top Right
    if (x !== 0) {
      if (boardState[x - 1][y + 1] === "B") localBombCount++;
    }

    // Center Left
    if (boardState[x][y - 1] === "B") localBombCount++;

    // Center Center
    if (boardState[x][y] === "B") {
      setFoundBomb(true);
      setBombCount("B");
      return;
    }

    // Center Right
    if (boardState[x][y + 1] === "B") localBombCount++;

    // Bottom Left
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y - 1] === "B") localBombCount++;
    }

    // Bottom Center
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y] === "B") localBombCount++;
    }

    // Bottom Right
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y + 1] === "B") localBombCount++;
    }

    if (localBombCount > 0) {
      setBombCount(localBombCount);
    }
  };

  const gridSquareClickHandler = () => {
    setClicked(true);
    checkForBombs();
  };

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid #000",
        display: "inline-block",
        background: foundBomb ? "#f00" : "#fff",
      }}
      onClick={gridSquareClickHandler}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          cursor: "pointer",
          background: clicked ? bombCountColors[bombCount] : "#fff",
        }}
      >
        {!clicked && <span style={{ color: "#fff" }}>E</span>}
        {clicked && bombCount}
      </div>
    </div>
  );
};

export default GridSquare;
