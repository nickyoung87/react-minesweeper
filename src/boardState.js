// 0 for not clicked, 'B' for bomb
const totalBombs = 15;
const rows = 10;
const cols = 10;
const chanceToPlaceBomb = 25; // Percentage
const boardState = [];

for (let i = 0; i < rows; i++) {
  let column = [];
  for (let j = 0; j < cols; j++) {
    column.push(Math.floor(Math.random() * 100) <= chanceToPlaceBomb ? "B" : 0);
  }
  boardState.push(column);
}

console.log("boardState", boardState);

export default boardState;
