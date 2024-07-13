//shift+option+F - Prettier
import Player from "./Components/Player";
import Gameboard from "./Components/Gameboard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName = "Player 1" symbol = "X"/>
          <Player initalName = "Player 2" symbol = "O"/>
        </ol>
        <Gameboard />
      </div>
    </main>
  );
}

export default App;
