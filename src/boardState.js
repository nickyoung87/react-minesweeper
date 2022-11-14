// 0 for not clicked, 'B' for bomb
let totalBombs = 0;
const rows = 10;
const cols = 10;
const chanceToPlaceBomb = 25; // Percentage
const boardState = [];

for (let i = 0; i < rows; i++) {
  let column = [];
  for (let j = 0; j < cols; j++) {
    if (Math.floor(Math.random() * 100) <= chanceToPlaceBomb) {
      column.push(9); // We will use the number 9 for bombs
      totalBombs++;
    } else {
      column.push(0);
    }
  }
  boardState.push(column);
}

console.log("boardState", boardState);

export { totalBombs, boardState as default };
//export default boardState;
