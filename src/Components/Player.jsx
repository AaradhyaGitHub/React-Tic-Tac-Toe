import { useState } from "react";

export default function Player({ name, symbol }) {
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

  let playerName = <span className="player-name">{name}</span>;

  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required value={name} /> : playerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
