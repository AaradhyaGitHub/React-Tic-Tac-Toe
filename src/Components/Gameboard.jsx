const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  //idea is a allay full of array
  //every array holds 3 value --> some will be null, some will be X or O depending on user input
];

export default function Gameboard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  {
    /* 
      
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    
  
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
        
    
            setGameBoard((prevGameBoard) => {
              const updatedBoard = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
              ];
              //updatedBoard is now a new array that consists value of old array as child components
              // now wer have a brand new array with brand new nested arrays which still stores the value it was holding on to before
              //this is an immutable way of updating the array
              updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
              return updatedBoard;
            });
        
            onSelectSquare();
          }


*/
  }

  {
    /*
    We got a problem.....We need to know currently active player in Gameboard and Player Components.
    In Gameboard, we need to know what symbol is being used 
    In Player, we need to know which player is currently active by using CSS
    But these are 2 different components...How can we let both components know who is active

    This is where LIFTING THE STATE comes into play.
        > Lift the state to the closest ANCESTOR component which has acess to all the components that need access to the state
        > In this case, the App component. App can pass that info to both components using props
*/
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  //we need a way to dynamically disable the button
                  disabled={playerSymbol !== null}
                  //playerSymbol is an X or 0 means that the button has been clicked 
                  //if it is null, the button has not been closed and it is enabled. 
                  //if it is not null, it is either an X or an O....it has already been interacted with 
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
