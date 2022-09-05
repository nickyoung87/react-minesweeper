import React from "react";
import GridSquare from "./GridSquare";

const Grid = ({ rows, cols }) => {
  const gridSquares = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      gridSquares.push(<GridSquare coords={{ x: i, y: j }} />);
    }
    gridSquares.push(<br />);
  }

  return <div>{gridSquares}</div>;
};

export default Grid;
