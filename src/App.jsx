//shift+option+F - Prettier
import { useState } from "react";
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
import Log from "./Components/Log.jsx"

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare({onSelectSquare}){
    setActivePlayer( (currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns();
    
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initalName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initalName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol = {activePlayer}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
