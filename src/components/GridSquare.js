import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBomb,
  faFlag,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  fa0,
} from "@fortawesome/free-solid-svg-icons";
import boardState from "../boardState";

const GridSquare = ({ coords }) => {
  const [clicked, setClicked] = useState(false);
  const [bombCount, setBombCount] = useState(0);
  const [foundBomb, setFoundBomb] = useState(false);
  const [hasFlag, setHasFlag] = useState(false);

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
    "#ff0000", // 9
  ];

  const getBombCountNumber = (bombCount) => {
    switch (bombCount) {
      case 0:
        return <FontAwesomeIcon icon={fa0} />;
      case 1:
        return <FontAwesomeIcon icon={fa1} />;
      case 2:
        return <FontAwesomeIcon icon={fa2} />;
      case 3:
        return <FontAwesomeIcon icon={fa3} />;
      case 4:
        return <FontAwesomeIcon icon={fa4} />;
      case 5:
        return <FontAwesomeIcon icon={fa5} />;
      case 6:
        return <FontAwesomeIcon icon={fa6} />;
      case 7:
        return <FontAwesomeIcon icon={fa7} />;
      case 8:
        return <FontAwesomeIcon icon={fa8} />;
      case 9:
        return <FontAwesomeIcon icon={faBomb} />;
    }
  };

  const checkForBombs = () => {
    const x = coords.x;
    const y = coords.y;
    let localBombCount = 0;

    // Top Left
    if (x !== 0) {
      if (boardState[x - 1][y - 1] === 9) localBombCount++;
    }

    // Top Center
    if (x !== 0) {
      if (boardState[x - 1][y] === 9) localBombCount++;
    }

    // Top Right
    if (x !== 0) {
      if (boardState[x - 1][y + 1] === 9) localBombCount++;
    }

    // Center Left
    if (boardState[x][y - 1] === 9) localBombCount++;

    // Center Center
    if (boardState[x][y] === 9) {
      setFoundBomb(true);
      setBombCount(9);
      return;
    }

    // Center Right
    if (boardState[x][y + 1] === 9) localBombCount++;

    // Bottom Left
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y - 1] === 9) localBombCount++;
    }

    // Bottom Center
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y] === 9) localBombCount++;
    }

    // Bottom Right
    if (x !== boardState.length - 1) {
      if (boardState[x + 1][y + 1] === 9) localBombCount++;
    }

    if (localBombCount > 0) {
      setBombCount(localBombCount);
    }
  };

  const gridSquareClickHandler = () => {
    if (hasFlag) return; // Exit early if there is a flag (player needs to remove flag by right clicking again)
    setClicked(true);
    checkForBombs();
  };

  const gridSquareRightClickHandler = (e) => {
    e.preventDefault();
    setHasFlag((prevState) => !prevState);
  };

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid #000",
        display: "inline-block",
        /* background: foundBomb ? "#f00" : "#fff", */
        userSelect: "none",
      }}
      onClick={gridSquareClickHandler}
      onContextMenu={gridSquareRightClickHandler}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          cursor: "pointer",
          background: clicked ? bombCountColors[bombCount] : "#fff",
          color: "#fff",
        }}
      >
        {!clicked && !hasFlag && (
          <span style={{ color: "#fff", fontSize: "1.64rem" }}>E</span>
        )}
        {clicked && !hasFlag && getBombCountNumber(bombCount)}
        {hasFlag && <FontAwesomeIcon icon={faFlag} style={{ color: "#000" }} />}
      </div>
    </div>
  );
};

export default GridSquare;
