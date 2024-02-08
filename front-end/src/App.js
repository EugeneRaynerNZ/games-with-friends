import './App.css';
import { useState } from 'react';

function App() {

  const [tempPlayer, addTempPlayer] = useState('')
  const [players, addNewPlayer] = useState([])
  const [tempAmount, setTempAmount] = useState(0)
  const [amount, setGameAmount] = useState([])

  // function createInput() {
  //   return <input placeholder="Eugene" onChange={(e) => typing(e.target.value)}></input>
  // }

  function CreateAmountOfGames() {
    return <tr>
            <td>Name Holder</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
  }

  return (
    <div className="App">
      {/* Enter names */}
      <div>
        Name:
        <input placeholder="Eugene" onChange={(e) => addTempPlayer(e.target.value)}></input>
        <button onClick={() => {
                          addNewPlayer([
                            ...players,
                            { name: tempPlayer }
                          ]);
                        }}>Add Player to Roster</button>
        {/* <button onClick={createInput}>Add another player</button> */}
        <button onClick={() => console.log(players)}>Check Players</button>
      </div>

      {/* Amount of games */}
      Amount of games
      <input type="number" onChange={(e) => setTempAmount(e.target.value)}></input>

      <button onClick={() => {
                          setGameAmount([
                            ...amount,
                            { id: tempAmount }
                          ]);
                        }}>Add games</button>

      <button onClick={() => console.log(amount)}>Start Game</button>

      {/* names are exported from database */}
      <table>
        <tbody>
          
          {/* create games */}
          <CreateAmountOfGames />

          {players.map(function(player, i){
              return <tr key={i} >
                      <td>{player.name}</td>
                      <td>Game 1</td>
                      <td>Game 2</td>
                      <td>Game 3</td>
                      <td>Game 4</td>
                    </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;