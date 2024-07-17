import { useState } from "react";

export default function Player({ initalName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing);
    // this is a bad practce, memorize not to do it!
    // pass a function instead which React will automatically call and guarentee current state

    setIsEditing((editing) => !editing);

    //setIsEditing(!isEditing) also worked but React behind the scenes "schedules" the state update

    //The update hence isn't performed instantly and is scheduled to perform in the future.
    //Future is just a couple milliseconds, but it's not instant and that is IMPORTANT!

    /*
        If you do:

        setIsEditing(!isEditing); --> takes false as argument
        setIsEditing(!isEditing); --> takes false as argument

        You'll get the same behaviour even with the second line. 

        Both those lines initially are working on the basis that isEditing is False. 
        The first line schedules a set update to change the state to true 
        but it does not change the state immiediately. 

        In the next line, we still have the same the state of false. 
        And finally then the 2 scheduled updates will execute right after each other. 

        If we use function like we are doing above, we get the latest update right away. 

        setIsEditing((editing) => !editing); --> takes false as argument 
        setIsEditing((editing) => !editing); --> takes true as argument

        Conclusion:
        When using setIsEditing((editing) => !editing):
        - This ensures React captures and uses the latest state value.
        - Avoids issues where consecutive calls like setIsEditing(!isEditing) may not work as expected
          due to React's batching of state updates.
  */
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    //userInput.value holds the user input and we are using it to set the new state for PlayerName.
    //We then feed that new input to the input tab below.
  }
  /*
    onChange will trigger for every key stroke and provide us with an event object with the value that the user provided ie the key user hit 
    so we use event as a parameter. 

    We are passing a pointer at the the handleChange function to the onChange prop on the input element 
    and the react will call handleChange when that change even occurs and will give is the userInput object as an argument. 
  */

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          editablePlayerName
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
