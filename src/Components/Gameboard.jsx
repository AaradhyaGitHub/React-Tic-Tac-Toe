const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  //idea is a allay full of array
  //every array holds 3 value --> some will be null, some will be X or O depending on user input
];

export default function Gameboard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button> {playerSymbol} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
