import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  //idea is a allay full of array
  //every array holds 3 value --> some will be null, some will be X or O depending on user input
];

export default function Gameboard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    {/*
      setGameBoard((prevGameBoard) => {
        prevGameBoard[rowIndex][colIndex] = "X";
        return prevGameBoard;
      });
      
            If your state is an object or an array, you shoulld update it in a immutable way 
            Which MEANS.... Make a copy of the object or the array so a new array or a new object 
            Then you change the copy and not the original. This is because when are modifying object 
            
            prevGameBoard[rowIndex][colIndex] = 'X'
            Above code immiedeately updates the old value in the memory even before the scheduled update is handles by React
            This can lead to bugs or side effects if you have multiple scheduled state updates in your code
        */
    }
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        //updatedBoard is now a new array that consists value of old array as child components
        // now wer have a brand new array with brand new nested arrays which still stores the value it was holding on to before
        //this is an immutable way of updating the array
        updatedBoard[rowIndex][colIndex] = "X";
        return updatedBoard;
      });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick = {() => handleSelectSquare(rowIndex,colIndex)}> {playerSymbol} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
