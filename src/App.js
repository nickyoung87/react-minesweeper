import React from "react";
import { totalBombs } from "./boardState";
import Grid from "./components/Grid";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <p style={{ textAlign: "center" }}>Minesweeper</p>
        <p>Total Bombs: {totalBombs}</p>
        <p style={{ textAlign: "center" }}>
          <button onClick={() => window.location.reload()}>
            Refresh Board
          </button>
        </p>
        <Grid rows={10} cols={10} />
      </div>
    </div>
  );
}

export default App;
